




async function screenshot(info,page){
    await page.screenshot({path:`screenshots/${info.title}.png`});
}
export default screenshot;