import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/actions";
import BreadCrumb from "../bread-crumb/BreadCrumb";
import style from "./UserCard.module.scss";

const UserCard = () => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [localFormData, setLocalFormData] = useState({ ...formData });

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({
            ...localFormData,
            [name]: value,
        });
    };


    const saveChanges = () => {
        dispatch(updateFormData(localFormData));
        setIsEditing(false);
    };


    return (

        <div>
            <BreadCrumb></BreadCrumb>
            <div className={style.formContainer}>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Current Organization:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="currOrg"
                                value={localFormData.currOrg}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.currOrg}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Summary:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="summary"
                                value={localFormData.summary}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.email}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Skills:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="skills"
                                value={localFormData.skills}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.skills}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Current Employment Status:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="employmentStatus"
                                value={localFormData.employmentStatus}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.employmentStatus}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Available From:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="availableFrom"
                                value={localFormData.availableFrom}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.availableFrom}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Date of Birth:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="dob"
                                value={localFormData.dob}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.dob}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Current Salary:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="currentSalary"
                                value={localFormData.currentSalary}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.currentSalary}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Relevent Experience:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="revelentExp"
                                value={localFormData.revelentExp}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.revelentExp}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Notice Period:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="noticePeriod"
                                value={localFormData.noticePeriod}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.noticePeriod}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Salary Expectation:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="expSalary"
                                value={localFormData.expSalary}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.expSalary}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Full Address:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="fullAddress"
                                value={localFormData.fullAddress}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.fullAddress}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Status:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="status"
                                value={localFormData.status}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.status}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Resume:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="Resume"
                                value={localFormData.resume}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.resume}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Salary Type:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="salaryType"
                                value={localFormData.salaryType}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.salaryType}</span>
                        )}
                    </div>
                </div>
                <div className={style.formRow}>
                    <div className={style.formField}>
                        <label>Total Experience:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="exp"
                                value={localFormData.exp}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.exp}</span>
                        )}
                    </div>
                    <div className={style.formField}>
                        <label>Language Skills:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="LangSkills"
                                value={localFormData.LangSkills}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{formData.LangSkills}</span>
                        )}
                    </div>
                </div>
                <div className={style.formActions}>
                    {isEditing ? (
                        <button onClick={saveChanges}>Save</button>
                    ) : (
                        <button onClick={toggleEditMode}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );

};

export default UserCard;
