/******************************************************************************
 * last modify : jh.jeong
 ******************************************************************************/
 import React, { useState, useEffect } from "react";
 import { useSelector } from "react-redux";
 import { reducerState } from "../../common";
 import { Champion, RecentWinRate } from "../../common/reducer";
 import * as S from "./styled";
 
 interface MatchInfoCompProps {}
 
 export const MostInfoComp: React.FunctionComponent<MatchInfoCompProps> = props => {
     const searchSelector = useSelector((state: reducerState) => state.search);
 
     const [selectedTab, setSelectedTab] = useState<"champ" | "week">("champ");
 
     return (
         <S.matchInfoContainer>
             
         </S.matchInfoContainer>
     );
 };
 