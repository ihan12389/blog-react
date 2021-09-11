import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*기본태그 정의*/
    html, body, #root {height:100%; padding:0; margin:0;}
    body, td, select, textarea, input {font-size:12px/140%; font-family:'돋움','Dotum', 'verdana'; color:#666;}

    /* 마진과 패딩의 초기화 */
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, th, td {margin:0; padding:0;}

    /* 헤더 폰트 사이즈 초기화 */
    h1, h2, h3, h4, h5, h6 {font-size:100%;}

    /* 리스트의 스타일 제거 */
    ol, ul {list-style:none;}

    /* 폰트 강조 특성 초기화 */
    address, caption, cite, code, dfn, em, strong, th, var {font-style:normal;}

    /* 테이블 스타일 초기화 */
    table {border-collapse:collapse; border-spacing:0; table-layout:fixed;}
    td {word-break:break-all; word-wrap:break-word;}

    /* 이미지 및 필드셋에서 보더 표시 초기화 */
    fieldset, img {border:0;}

    /* 캡션 텍스트 정렬 초기화 */
    caption {text-align:left;}

    /* 인용구 표시 초기화 */
    q:before, q:after {content :'';}

    /* 폼태그의 초기화 */
    select {font:12px 돋움,Dotum;}
    textarea {font:12px/140% 돋움,Dotum;}
    input {font:12px 돋움,Dotum; color:#666; padding:0 2px; height:20px;}
    input.radio {vertical-align:middle; margin-bottom:3px;}

    a:link    {color:#000; text-decoration:none;}
    a:active    {color:#000; text-decoration:none;}
    a:visited    {color:#000; text-decoration:none;}
    a:hover    {color:#000; text-decoration: underline;}
`;

export default GlobalStyle;
