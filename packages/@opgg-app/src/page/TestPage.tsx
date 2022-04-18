import React from "react";
import styled from "styled-components";
import { ListComponent } from "components";

export interface TestPageProps {}

const TEST_DATA: string[] = [];
for (var i = 0; i < 10000; i++) {
    TEST_DATA.push(String.fromCharCode(i + 65));
}

const TestPage: React.FunctionComponent<TestPageProps> = (
    props: TestPageProps
) => {
    
    return (
        <>
            목록 테스트 중..
            <TestPageContainer>
                <WantedDataContainer>
                    <ListComponent
                        items={TEST_DATA}
                        hasNextPage={false}
                        itemSize={120}
                        loadMore={(start: number, stop: number) => {
                            return;
                        }}
                        width={500}
                        height={500}
                    />
                </WantedDataContainer>
            </TestPageContainer>
        </>
    );
};

const TestPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WantedDataContainer = styled.div`
    width: 33%;
    height: 50%;
`;

export default TestPage;
