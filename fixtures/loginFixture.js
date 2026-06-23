


import {test as base} from "@playwright/test"
import Login from "../PageObjectModel/Login.page"
import data from "../test-data/loginData.json"


export const test=base.extend(
    {
        LoginFixture:async({page},use)=>{
                await page.goto(`${process.env.BASE_URL}/admin/index.php`)
                const LoginPage=new Login(page);
                await LoginPage.LoginFunctionality(data);
                await use(page);
        }
    }
)

export {expect} from "@playwright/test"