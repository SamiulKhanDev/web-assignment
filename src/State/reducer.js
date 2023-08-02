export const initialState = {
  products: [],
  projectmanagement: {
    title: "Project Management Software",
    desc: "Project management software is used to assist with project planning, tracking, and execution for startups and any businesses. It is designed to help project managers and teams stay organized and track the progress of projects, so that they can be completed on time and on budget. Project management software can be used to track tasks and resources, manage budgets, and create reports. It can also be used to collaborate on projects and to assign tasks to team members. With project management software, project managers can easily keep track of the progress of their projects and ensure that all tasks are completed as expected.",
    sub: [
      "Collaboration",
      "Task Management",
      "Productivity",
      "Presentation",
      "Time Management",
    ],
  },
  data: {
    title: "Data Software",
    desc: "Data software is designed to store, manage, and analyze data. It can be used to create reports and data visualizations, and can also be used to track and store large amounts of data. Common features of data software include data storage, data analysis, data visualization, and data mining. Data software are used in a variety of industries, including finance, healthcare, business, and marketing.",
    sub: [
      "Cloud Computing",
      "Cloud Storage",
      "Data Analytics",
      "Cloud And Data Management",
      "Document Management",
    ],
  },
  customer: {
    title: "Customer Software",
    desc: "Customer Software is a term used to refer to any software that is used to meet the needs of customers. This type of software is designed to provide customers with a convenient and efficient way to access and use products and services. Examples of common customer software include customer relationship management (CRM) systems, leead management software, and customer experience software. Customer software is essential for any business that wants to deliver a superior customer experience.",
    sub: ["CRM", "Lead Management", "Customer Experience", "Survey"],
  },
  development: {
    title: "Development Software",
    desc: "Development Software is used to create applications, programs, websites or any digital asset. It enables developers to design, code, test and debug software applications in a variety of programming languages. It includes compilers, debuggers, interpreters, linkers and text editors, as well as various frameworks, libraries and other development tools. Development software are used by software engineers, software developers, web designers, other professionals, or even by people with no development skills, thanks to nocode software.",
    sub: [
      "Web Development",
      "No-Code Development",
      "Website Builder",
      "Design",
      "Video",
      "Application Development",
      "Content Management System",
      "Educational",
    ],
  },
  marketing: {
    title: "Marketing Software",
    desc: "Marketing software is used to facilitate and automate marketing activities, such as email campaigns, social media management, Marketing Automation, SEO, and more. It can help marketers reach their target audiences, increase sales, and better understand their customers and prospects. With marketing software, marketers can easily manage, monitor, and measure their campaigns, helping them make smarter decisions and maximize the return on their marketing investments.",
    sub: [
      "Email Marketing",
      "Content Marketing",
      "SEO",
      "Marketing Automation",
      "Social Media",
      "Growth Marketing",
      "Translation",
      "Mobile Marketing",
    ],
  },
  finance: {
    title: "Finance Software",
    desc: "Finance software saas is used to manage financial operations, such as budgeting, accounting, and investments. This type of saas tool is designed to help individuals, businesses, and organizations manage their finances more efficiently. It can provide users with helpful features such as tracking expenses and income, creating financial reports, and managing multiple accounts. Finance software can also help users identify areas of potential savings, create financial plans, and manage investments. It is an invaluable tool for anyone looking to have better control over their finances.",
    sub: ["Payments", "Online Banking", "Accounting", "Investment Management"],
  },
  communication: {
    title: "Communication Software",
    desc: "Communication software refers to any program or application used to facilitate communication between with prospects, customers or team members. Commonly used communication software includes instant messaging, video conferencing, online meeting software, and call center tools. With the increased use of remote work, communication software are helping to bridge the gap between physical and digital worlds.",
    sub: ["Customer Support", "Call Centers", "Video Conferencing"],
  },
  sales: {
    title: "Sales Software",
    desc: "Sales software provides solutions to help sales teams quickly identify prospects, track customer interactions, and close deals. It helps to streamline the sales process, allowing salespeople to focus more on selling and less on tracking data. Sales software typically include features such as contact management, lead tracking, automation, and analytics. It can also provide helpful insights into customer behavior and trends, helping sales teams make better decisions. Sales saas tools can help organizations increase their bottom line and maximize customer satisfaction.",
    sub: ["Prospecting", "E Commerce"],
  },
  business: {
    title: "Business Software",
    desc: "Business software is designed to help businesses increase productivity and efficiency by automating and streamlining various processes. Common types of business software include Business Process management Software (BPO), Business Intelligence Software (BI), or ERP. Business software can provide businesses with the ability to quickly and accurately analyze data, track customer interactions, and improve their processes. With the right business software, businesses can improve efficiency, reduce costs, and increase profits.",
    sub: [
      "Digital Signature",
      "Company Formation",
      "Legal",
      "Business Process Management",
      "Scheduling",
      "ERP",
      "Business Intelligence",
    ],
  },
  it: {
    title: "IT Software",
    desc: "IT software is used to facilitate information technology operations. This can include applications IT management software, security software, remote desktop or application monitoring tools.",
    sub: [
      "Application Monitoring",
      "Security",
      "IT Management",
      "Remote Desktop",
    ],
  },
  humanresources: {
    title: "Human Resources Software",
    desc: "Human Resources (HR) software saas helps companies to manage their human capital. This type of tool enables businesses to manage employee records, track performance and productivity, and manage payroll and benefits. It can also help HR departments to streamline processes like hiring, recruitment, and onboarding, as well as providing analytics and reporting on employee data. Human resources software also helps with employee engagement and retention, allowing your startup or business to measure employee satisfaction and identify areas for improvement. Additionally, this type of software can support employee self-service functions, allowing employees to access their personal information and manage their own time off or benefits.",
    sub: [
      "Recruitment",
      "Payroll Management",
      "Employee Engagement",
      "Applicant Tracking",
    ],
  },
  operationsmanagement: {
    title: "Operations Management Software",
    desc: "Operations Management Software helps businsesses in the management of the day-to-day activities and processes that are involved in the production and delivery of goods and services. It includes field service management, contract management or inventory management software. It also involves the implementation of strategies and tactics to optimize production and service delivery, as well as the development of innovative solutions to solve production and management problems. Operations Management Tools are essential for businesses to ensure that operations are running smoothly and that all stakeholders are satisfied with the results.",
    sub: [
      "Contract Management",
      "Inventory Management",
      "Field Service Management",
    ],
  },
}
 //this is the initial state, where user is null.

export const actionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
}; //this object is to define all actionTypes.

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state, //merging the old state manually.
        products: [...action.products],
      };
    default:
      return state;
  }
};

export default reducer;
