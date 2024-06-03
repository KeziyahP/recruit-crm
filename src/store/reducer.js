import { UPDATE_FORM_DATA } from "./actions";

// Initial state
const initialState = {
  formData: {
    name: "William Sample",
    email: "williamsample@gmail.com",
    phone: "+91 9021232326",
    designation: "Senior Product Manager",
    state: "Dallas",
    country: "United States",
    currOrg: "World Bank Group",
    skills: "HTML, CSS, Javascript",
    availableFrom: "Jul, 14, 2023",
    currentSalary: "$6000",
    noticePeriod: "90 Days",
    fullAddress: "9400 Ashton Rd, Philadelphia   ",
    resume: "Resume",
    exp: "5 Years",
    summary: "Current Organization",
    employmentStatus: "Employed",
    dob: "15 June 1993",
    revelentExp: "7 Years",
    expSalary: "$9000",
    status: "Submitted to Clien",
    salaryType: "Annual",
    LangSkills: "English(Elementary proficiency)",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
