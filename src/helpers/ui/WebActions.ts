import { Locator, Page } from "@playwright/test";

export default class WebActions {
    protected page: Page = null as any;
    constructor(page: Page) {
        this.page = page;
    }

    async naviageToUrl(url: string) {
        try {
            await this.page.goto(url)
            console.log("Navigated to url: " + url)
        } catch (error) {
            console.error("Error occurred while navigating to url: " + url)
        }
    }

    async clickElement(locatorObj: any) {
        try {
            let element: Locator = await this.getLocatorType(locatorObj)
            await element.click()
        } catch (error) {
            console.error("Error occurred while clicking element: " + locatorObj)
        }
    }


    async fillData(locatorObj: any, data: string) {
        try {
            let element: Locator = await this.getLocatorType(locatorObj)
            await element.fill(data)
        } catch (error) {
            console.error("Error occurred while filling data in element: " + locatorObj + " with data: " + data)
        }
    }

    private async getLocatorType(locatorObj: any): Promise<Locator> {
        let locatorType: string = locatorObj['locatortype'].toLowerCase().trim()
        let element = null as any
        switch (locatorType) {
            case "getbyrole":
                element = this.page.getByRole(locatorObj['role'], { name: locatorObj['value'] })
                break
            case "getbylabel":
                element = this.page.getByLabel(locatorObj['value'])
                break
            case "getbyplaceholder":
                element = this.page.getByPlaceholder(locatorObj['value'])
                break
            case "getbytext":
                element = this.page.getByText(locatorObj['value'])
                break
            case "getbytestid":
                element = this.page.getByTestId(locatorObj['value'])
                break
            case "xpath":
                element = this.page.locator(locatorObj['value'])
                break
            case "css":
                element = this.page.locator(locatorObj['value'])
                break

            default:
                console.error("Locator type is not supported: " + locatorType)
                break;
        }
        return element;
    }

    async customDropDown(locatorObj: any, value: any) {
        try {
            let dropDownArrow: Locator = await this.getLocatorType(locatorObj)
            await dropDownArrow.click()
            let dropDownOption: Locator = await this.getLocatorType(value)
            await dropDownOption.click()
        } catch {
            console.error("Unable to select value: " + value + " from dropdown: " + locatorObj)
            throw new Error("Unable to select value: " + value + " from dropdown: " + locatorObj)
        }
    }

    async uploadFile(locatorObj: any, filePath: any) {
        try {
            let element: Locator = await this.getLocatorType(locatorObj)
            if (filePath instanceof Array) {
                await element.setInputFiles(filePath[0], filePath[1])
            } else {
                await element.setInputFiles(filePath)
            }

        } catch (error) {
            console.error("Error occurred while uploading file: " + filePath)
            throw new Error("Error occurred while uploading file: " + filePath)
        }
    }

    async handleFileDownload(locatorObj: any, downloadPath: string) {
        try {
            const downloadPromise = this.page.waitForEvent('download')
            await this.clickElement(locatorObj)
            const download = await downloadPromise
            await download.saveAs(downloadPath)
        } catch (error) {
            console.error("Error occurred while handling file download: " + downloadPath)
            throw new Error("Error occurred while handling file download: " + downloadPath)
        }
    }

}