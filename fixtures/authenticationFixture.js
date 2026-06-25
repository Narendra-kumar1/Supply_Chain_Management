


// import {test as base } from "@playwright/test"
// import path from "path"
// import Login from "../PageObjectModel/Login.page"
// import data from "../test-data/loginData.json"
// export const test=base.extend({
//     login:[
//         async({browser},use)=>{
//                 const context=await browser.newContext();
//                 const page=await context.newPage();
//                 await page.goto(`${process.env.BASE_URL}/admin/index.php`)
//                 const LoginPage=new Login(page);
//                 await LoginPage.LoginFunctionality(data);
//                 await page.context().storageState({path:path.join(__dirname,"../auth/Admin.auth.json")});
//                 await use();
//         },{scope:'worker',auto:true}
//     ]


// })