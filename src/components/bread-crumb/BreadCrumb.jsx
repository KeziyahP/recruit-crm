import React from "react";
import PAGEDATA from "./constant";
import style from "./BreadCrumb.module.scss";

const BreadCrumb = () => {
    return (
        <div className={style.Container}>
            <div className={style.BreadCrumb}>
                <p className={style.colorPrimary}>{PAGEDATA.candidate}</p> 
                <p className={style.colorPrimary}>{">"}</p>
                <p>{PAGEDATA.robert}</p>
            </div>
            <div className={style.buttonContainer}>
                <button className={[style.button, style.buttonPrimary]}>
                    {PAGEDATA.request}
                </button>
                <button className={[style.button, style.buttonSecondary]}>
                    {PAGEDATA.previous}
                </button>
                <button className={[style.button, style.buttonSecondary]}>
                    {PAGEDATA.next}
                </button>
            </div>
        </div>
    );
};

export default BreadCrumb;
