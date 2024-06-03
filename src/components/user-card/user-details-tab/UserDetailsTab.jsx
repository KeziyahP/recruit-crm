import React from "react";
import TABLABELS from "./constant";
import Tabs from "../../../utilities/tab/Tabs";
import Tab from "../../../utilities/tab/Tab";
import style from "./UserDetailsTab.module.scss";

const UserDetailsTabs = () => {
    return (
        <Tabs>
            <Tab label={TABLABELS.allDetails}>
                <h1>Content for Tab 1</h1>
                <p>This is the content for the first tab.</p>
            </Tab>
            <Tab label={TABLABELS.assignedJobs}>
                <div className={style.Container}>
                    <div className={style.BreadCrumb}>
                        <p>Assigned job to William Sample </p>
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonPrimary}>
                            Assign To Jobs
                        </button>
                        <button className={ style.buttonSecondary}>
                            View All Assigned Jobs
                        </button>
                    </div>
                </div>
            </Tab>
            <Tab label={TABLABELS.emails}>
                <h1>Content for Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </Tab>
            <Tab label={TABLABELS.questions}>
                <h1>Content for Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </Tab>
            <Tab label={TABLABELS.hotlists}>
                <h1>Content for Tab 2</h1>
                <p>This is the content for the second tab.</p>
            </Tab>
            <Tab label={TABLABELS.details}>
                <h1>Content for Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </Tab>
            <Tab label={TABLABELS.contact}>
                <h1>Content for Tab 3</h1>
                <p>This is the content for the third tab.</p>
            </Tab>
        </Tabs>
    );
};

export default UserDetailsTabs;
