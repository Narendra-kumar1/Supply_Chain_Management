


import {test as base} from "@playwright/test"
import Landing from "../PageObjectModel/Landing.page";
import AddEditRetailer from "../PageObjectModel/AddEditRetailer.page";
import Retailerdata from "../utils/retailer"


export const test=base.extend({
    addRetailerFixture:async({page},use)=>{
        const data=Retailerdata();
        //console.log(data);
        
        await page.goto(`${process.env.BASE_URL}/admin/index.php`);
        const LandingPage=new Landing(page);
        await LandingPage.addRetailerLink.click();
        
        const AddEditRetailerPage=new AddEditRetailer(page);
        await AddEditRetailerPage.addRetailerFunctionality(data);

        await use(data);   
    }
     

})