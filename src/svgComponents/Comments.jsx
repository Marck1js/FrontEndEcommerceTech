import React from "react";

function Comments({size}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#0D0E0F"
        d="M11.095 19.608l.495.293-.495-.293zm.208-.35l-.495-.293.495.293zm-1.806 0l.495-.293-.495.293zm.208.35l-.495.293.495-.293zm-5.461-3.503l.53-.22-.53.22zm3.187 1.963l.019-.575-.019.575zm-1.456-.232l-.22.532.22-.532zm10.581-1.731l.532.22-.532-.22zm-3.188 1.963l-.018-.575.018.575zm1.457-.232l.22.532-.22-.532zm.447-10.164l.3-.49-.3.49zm1.056 1.056l.49-.3-.49.3zm-10.8-1.056l-.3-.49.3.49zM4.472 8.727l-.49-.3.49.3zm4.261 9.53l-.293.495.293-.495zM11.59 19.9l.208-.35-.99-.586-.207.35.99.586zm-2.588-.35l.208.35.99-.586-.208-.35-.99.585zm1.599-.236c-.087.146-.315.146-.402 0l-.99.586c.533.899 1.85.899 2.381 0l-.99-.586zM9.44 7.775h1.92v-1.15H9.44v1.15zm6.785 4.865v.64h1.15v-.64h-1.15zm-11.65.64v-.64h-1.15v.64h1.15zm-1.15 0c0 .738 0 1.32.032 1.79.032.476.1.879.255 1.255l1.063-.44c-.088-.213-.142-.476-.17-.893-.03-.422-.03-.959-.03-1.712h-1.15zm4.025 4.213c-.635-.02-.983-.075-1.255-.188l-.44 1.063c.473.196.996.254 1.658.275l.037-1.15zm-3.738-1.168a3.775 3.775 0 002.043 2.043l.44-1.063a2.625 2.625 0 01-1.42-1.42l-1.063.44zm12.513-3.045c0 .753 0 1.29-.03 1.712-.028.417-.082.68-.17.892l1.063.44c.155-.375.223-.778.255-1.254.032-.47.032-1.052.032-1.79h-1.15zm-2.838 5.363c.662-.021 1.184-.08 1.658-.275l-.44-1.063c-.272.113-.62.168-1.255.188l.037 1.15zm2.638-2.759a2.625 2.625 0 01-1.42 1.421l.44 1.063a3.775 3.775 0 002.043-2.043l-1.063-.44zm-4.665-8.11c1.059 0 1.812.002 2.399.057.577.055.933.16 1.213.33l.6-.98c-.49-.3-1.042-.432-1.704-.495-.654-.062-1.472-.061-2.508-.061v1.15zm6.015 4.866c0-1.036 0-1.854-.061-2.508-.064-.662-.195-1.214-.495-1.704l-.98.6c.17.28.275.635.33 1.213.055.587.056 1.34.056 2.399h1.15zm-2.403-4.478c.353.216.65.513.866.866l.98-.6a3.775 3.775 0 00-1.246-1.247l-.6.98zM9.44 6.625c-1.036 0-1.854 0-2.507.061-.663.063-1.215.195-1.705.495l.6.98c.28-.17.636-.275 1.213-.33.587-.055 1.34-.056 2.399-.056v-1.15zM4.575 12.64c0-1.059 0-1.812.056-2.399.055-.578.16-.933.33-1.213l-.98-.6c-.3.49-.432 1.042-.494 1.704-.063.654-.062 1.472-.062 2.508h1.15zm.653-5.459A3.775 3.775 0 003.98 8.428l.98.6c.217-.353.514-.65.867-.866l-.6-.98zm4.764 11.784c-.161-.272-.301-.51-.437-.697a1.76 1.76 0 00-.53-.505l-.585.99c.041.024.095.067.184.19.097.134.206.317.378.607l.99-.585zm-2.579-.322c.356.011.585.019.76.04.165.02.23.048.267.07l.586-.99a1.787 1.787 0 00-.714-.221c-.238-.03-.527-.038-.862-.049l-.037 1.15zm4.385.907c.172-.29.28-.473.378-.606a.64.64 0 01.184-.191l-.586-.99a1.76 1.76 0 00-.529.505c-.136.187-.276.425-.437.697l.99.585zm1.552-2.057c-.335.011-.624.02-.862.049-.246.03-.486.086-.714.22l.586.99c.037-.021.102-.049.268-.069.174-.021.403-.029.759-.04l-.037-1.15z"
      ></path>
      <path
        fill="#0D0E0F"
        d="M19.771 12.348l.532.22-.532-.22zm-1.623 1.624l.22.53-.22-.53zm.42-9.53l-.301.49.3-.49zm.99.99l.49-.3-.49.3zm-10.126-.99l-.3-.49.3.49zm-.99.99l-.49-.3.49.3zm4.658-.857h1.8v-1.15h-1.8v1.15zM19.425 9.1v.6h1.15v-.6h-1.15zm0 .6c0 .707 0 1.208-.027 1.602-.027.39-.078.632-.158.826l1.063.44c.148-.357.211-.74.242-1.187.03-.443.03-.99.03-1.681h-1.15zm-.185 2.428a2.426 2.426 0 01-1.312 1.313l.44 1.062a3.575 3.575 0 001.935-1.935l-1.063-.44zM14.9 4.575c.993 0 1.697 0 2.245.053.54.05.867.148 1.122.304l.6-.98c-.466-.286-.99-.41-1.613-.47-.615-.058-1.383-.057-2.354-.057v1.15zM20.575 9.1c0-.97 0-1.74-.058-2.354-.06-.623-.183-1.148-.469-1.614l-.98.601c.156.255.253.583.304 1.122.052.547.053 1.252.053 2.245h1.15zm-2.308-4.168c.326.2.6.475.8.8l.981-.6a3.576 3.576 0 00-1.18-1.18l-.601.98zM13.1 3.425c-.971 0-1.74 0-2.354.058-.624.06-1.148.183-1.614.469l.6.98c.256-.156.583-.253 1.122-.304.548-.052 1.253-.053 2.246-.053v-1.15zm-3.968.527c-.481.295-.886.699-1.18 1.18l.98.601c.2-.326.474-.6.8-.8l-.6-.981zM8.6 7.23c.04-.77.14-1.185.331-1.497l-.98-.6c-.347.564-.457 1.22-.5 2.037l1.149.06zm8.218 7.533c.613-.02 1.103-.075 1.549-.26l-.44-1.063c-.246.102-.564.154-1.147.174l.038 1.149zM8.4 12.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0zM11.2 12.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0zM14 12.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"
      ></path>
    </svg>
  );
}

export default Comments;