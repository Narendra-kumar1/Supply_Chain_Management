import {test,expect} from "../../fixtures/loginFixture";
import Login from "../../PageObjectModel/Login.page";
import path from "path"
//import {expect} from "@playwright/test"
import data from "../../test-data/loginData.json"
import screenshot from "../../utils/screenshot";

test("login test @Smoke",async({LoginFixture,page},testInfo)=>{
    // await page.goto(`${process.env.BASE_URL}/admin/index.php`)
    
    // const LoginPage=new Login(page);
    //await LoginPage.LoginFunctionality(data);
    await expect(LoginFixture).toHaveURL("http://49.249.29.4:8081/AppServer/Supply_Chain_Management/admin/index.php");
    await screenshot(testInfo,page);
})

test.afterEach(async({page})=>{
    
    await page.getByRole("button",{name:"Log out"}).click();
    await expect(page).toHaveURL("http://49.249.29.4:8081/AppServer/Supply_Chain_Management/logout.php");
      

})