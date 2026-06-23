







import {test,expect} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditProduct from "../../PageObjectModel/AddEditProduct.page";
import path from "path";

import productData from "../../utils/productData";
import screenshot from "../../utils/screenshot";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("product with price letters @Adhoc",async({page},testInfo)=>{
    
    const data=productData();

    page.on("dialog",async dialog=>{
        await dialog.accept();
    })
    await page.goto(`${process.env.BASE_URL}/admin/add_product.php`);

    const LandingPage=new Landing(page);
    

    const AddEditProductPage=new AddEditProduct(page);
    await AddEditProductPage.addProductFunctionality({...data,price:"ab"});
    await expect(await page.getByText("* Invalid Price")).toBeVisible();
     await screenshot(testInfo,page)
     
    
})