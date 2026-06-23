



import {test,expect} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import path from "path"
import screenshot from "../../utils/screenshot";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("add retailer link @Smoke",async({page},testInfo)=>{

    await page.goto(`${process.env.BASE_URL}/admin/index.php`);

    const LandingPage=new Landing(page);
    await LandingPage.addRetailerLink.click();
    
    await expect(page).toHaveURL(`${process.env.BASE_URL}/admin/add_retailer.php`);
     await screenshot(testInfo,page)
})