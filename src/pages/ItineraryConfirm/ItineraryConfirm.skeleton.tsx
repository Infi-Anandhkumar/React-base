import { useResize } from "./../../utils/resize";
// import { useAuth } from "./../../hooks/Auth.hook";
import { Skeleton, Divider, Flex, Row, Col, Card, Typography } from "antd";
import React from "react";

const ItineraryConfirmSkeleton = () => {

    const isAuthenticated = true;
    const { isSmallScreen, isLargeScreen } = useResize(991);
    const Text = Typography.Text;

    return (
        <Row>
            <Col xs={24} lg={24} xl={24}>
                <Row className={`mb-15 cls-headerTitle ${isAuthenticated ? "" : "cls-before-login"} `} justify="space-between">
                    <Col xs={24} lg={24} xl={24} className={`${isLargeScreen ? "pl-30 pt-30": ""}`}>
                        <Flex gap={"10px"} className="my-15" align="center" wrap>
                            {[...Array(3)].map((_, index) => (
                                <>
                                    <Skeleton.Input active size="small" /> 
                                    {
                                        (index < 2) 
                                            ? <Text className='cls-breadcrumbSeparator fs-11 Infi-06_DownArrow' />
                                            : <></>
                                    }
                                </>
                            ))}
                        </Flex>
                    </Col>
                    <Col xs={24} lg={24} xl={24} className={isSmallScreen ? "" : "text-center"}>
                        <Skeleton.Input active size="large" className={`${isSmallScreen ? "w-100 pt-10" : "w-60 pt-30"} pb-10`} />
                        <Skeleton.Input active size="large" className={`${isSmallScreen ? "w-100" : "w-80"} py-10`} />
                    </Col>
                    <Col xs={24} lg={7} xl={7} className="text-right pt-15">
                        <Skeleton.Input active size="large" />
                    </Col>
                    <Col xs={24} lg={9} xl={9} className="pt-15"> </Col>
                    <Col xs={24} lg={7} xl={7} className="text-left pt-15">
                        <Skeleton.Input active size="large" />
                    </Col>
                </Row>
                <Row className="mt-30 mb-15 justify-center">
                    <Col xs={24} lg={18} xl={18}>
                        <Card>
                            {[...Array(2)].map((_, index) =>
                                <React.Fragment key={"confirm"+index}>
                                    <Row>
                                        <Skeleton.Input active className="w-20 h-30"/>
                                    </Row>
                                    <Flex gap={"10px"} className={`${isSmallScreen ? "" : "h-20"} my-15`} align="center" justify="space-between" wrap>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                    </Flex>
                                    <Row justify="center" className="my-20">
                                        <Col xl={9}>
                                            <Skeleton.Input active className="w-100"/>
                                        </Col>
                                    </Row>
                                    <Flex gap={"10px"} className={`${isSmallScreen ? "" : "h-20"} my-15`} align="center" justify="space-between" wrap>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                        <Skeleton.Input active size="small"/>
                                    </Flex>
                                    { index === 0 ? <Divider className="my-15" /> : <></> }
                                </React.Fragment>
                            )}
                            <Divider />
                            <Col xl={7} className="mb-20">
                                <Skeleton.Input active className="w-100 h-30"/>
                            </Col>
                            {[...Array(3)].map((_, index) =>
                                <React.Fragment key={"paxList"+index}>
                                    <Row>
                                        <Skeleton.Input active className={`${isSmallScreen ? "w-50" : "w-20"} h-30 mb-15`}/>
                                    </Row>
                                    <Row className="mb-30" align="middle" justify="space-between">
                                        {[...Array(4)].map((_,index) =>
                                            <Col xs={24} lg={8} xl={8} className={`mt-10`} key={"paxListSub"+index}>
                                                <Skeleton.Input active className={`${isSmallScreen ? "w-100": ""}`} size="large"/>
                                            </Col>
                                        )}
                                    </Row>
                                </React.Fragment>
                            )}
                        </Card>
                    </Col>
                </Row>
                <Row justify="center">
                    <Card className="mt-15">
                        <Skeleton.Input active className="h-50" style={{width: "50px"}}/>
                    </Card>
                </Row>
            </Col>
        </Row>
    );
};

export default ItineraryConfirmSkeleton;
