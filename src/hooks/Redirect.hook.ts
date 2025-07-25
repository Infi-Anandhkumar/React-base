import { useLocation, useNavigate } from "react-router-dom";
import { decryptData, encryptData } from "@/utils/encryption";
import { localStorageAccessor } from "@/utils/browserStorage";
import { PREV_ROUTE_STORAGE_KEY } from "@/routes/index.route";
import CFG from "@/config/config.json";
import { useDispatch } from "react-redux";
import { setRoutePath } from "@/stores/Menu.store";

/**
 * Custom hook for managing encrypted redirects.
 *
 * This hook provides functions to handle encrypted navigation within your application.
 * It includes:
 *   - `redirect`: Redirects to a given path (encrypted or decrypted) or the previous route.
 *   - `currentPath`: Returns the current decrypted path.
 *   - `getEncryptedPath`: Encrypts a given path.
 *   - `getDecryptedPath`: Decrypts a given path.
 *   - `isCurrentPathEqual`: Compares the current decrypted path with a provided path.
 *
 * @returns An object containing the above functions and properties.
 */
export function useRedirect() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // Storage hook to manage previous route
  const [LgetPrevRoute] = localStorageAccessor<string>(PREV_ROUTE_STORAGE_KEY);

  /**
   * Compares the current decrypted path with a provided path (comparable).
   * Decrypts the current pathname if URL path encryption is enabled in the config.
   * Removes any leading slashes from the comparable path to ensure correct comparison.
   *
   * @param {string} comparable - The path to compare with the current pathname.
   * @returns {boolean} - True if the current path matches the comparable path.
   */
  const isCurrentPathEqual = (comparable: string): boolean => {
    if (comparable == null) return false;
    
    let p = pathname.substring(1);
    if (!p) return false; 

    // Decrypt the current path if encryption is enabled in the configuration
    if (window.location.href.includes("viewMode=story") ? false : CFG.url_path_encryption) p = pathname === "/" ? pathname : decryptData(p);
    return p === comparable.replace(/^\//, "");
  };

  /**
   * Encrypts or decrypts a provided path based on the provided handler (encrypt or decrypt).
   * This private function is a utility to clean the path (removing leading slashes) and then apply
   * the encryption or decryption process depending on the handler provided.
   *
   * @param {(path: string) => string} handler - The function to apply (either encryption or decryption).
   * @param {string} path - The path that needs to be processed.
   * @returns {string} - The encrypted or decrypted path, with a leading slash.
   */
  function _getEncryptedOrDecryptedPath(
    handler: (path: string) => string,
    path: string
  ): string {
    let p = path?.replace(/^\//, "");

    // If encryption is enabled, apply the provided handler (encrypt or decrypt)
    if (window.location.href.includes("viewMode=story") ? false : CFG.url_path_encryption) p = handler(p);
    return `/${p}`;
  }

  /**
   * Encrypts a given path by utilizing the `getEncryptedOrDecryptedPath` utility.
   * This function ensures that the path is encrypted before further use in routing.
   *
   * @param {string} path - The path to be encrypted.
   * @returns {string} - The encrypted path with a leading slash.
   */
  const getEncryptedPath = (path: string): string =>
    _getEncryptedOrDecryptedPath(encryptData, path);

  /**
   * Decrypts a given path by utilizing the `getEncryptedOrDecryptedPath` utility.
   * This function is used to decrypt the path for routing and comparison purposes.
   *
   * @param {string} path - The encrypted path to be decrypted.
   * @returns {string} - The decrypted path with a leading slash.
   */
  const getDecryptedPath = (path: string): string => {
    return _getEncryptedOrDecryptedPath(decryptData, path);
  };

  /**
   * Redirects to the provided path or the previously stored route if "-1" is passed.
   * Encrypts the path before navigating for security reasons.
   * @param {string | -1} path - Path to navigate to, or "-1" to go to the previous route.
   */
  const redirect = (path: string | -1 | 0) => {
    // Handle "go back" functionality if "-1" is passed
    if (path === -1) {
      const LprevRoute = LgetPrevRoute();
      if (LprevRoute) {
        dispatch(setRoutePath(LprevRoute));
        navigate(getEncryptedPath(LprevRoute));
      }
      else
        console.warn("No previous route found in storage, staying on current page.");
      return;
    }

    // Ensure the path is a non-empty string
    if (typeof path !== "string" || path.trim() === "") {
      console.error("Invalid path provided, unable to navigate.");
      return;
    }

    // Navigate to the encrypted path
    const e = path === "/" ? path : getEncryptedPath(path);
    dispatch(setRoutePath(path));
    navigate(e);
    return;
  };

  /* Decrypted current path of the URL */
  let currentPath: string = pathname;
  
  try {
    if (pathname !== "/") currentPath = getDecryptedPath(pathname);
  } catch {
    // redirect("404");
  }

  return {
    redirect,
    currentPath,
    getEncryptedPath,
    getDecryptedPath,
    isCurrentPathEqual
  };
}
