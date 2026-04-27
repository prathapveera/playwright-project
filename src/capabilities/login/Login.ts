import WebActions from "../../helpers/ui/WebActions";
import config from '../../config/application-config.json'
import { Locator } from "@playwright/test";
import loginLocators from '../../locators/login.json'

export default class Login extends WebActions {
    constructor(page: any) {
        super(page)
    }

    /**
     * Navigate to the application login page
     */
    async navigateToLoginPage() {
        const envObj = process.env.ENVIRONMENT as keyof typeof config
        const url: string = config[envObj]['webUrl']
        await this.naviageToUrl(url)
    }

    /**
     * Fill username field with provided credentials
     * @param username - Username to enter
     */
    async enterUsername(username: string) {
        await this.fillData(loginLocators.username, username)
    }

    /**
     * Fill password field with provided credentials
     * @param password - Password to enter
     */
    async enterPassword(password: string) {
        await this.fillData(loginLocators.password, password)
    }

    /**
     * Click the login button
     */
    async clickLoginButton() {
        await this.clickElement(loginLocators.loginButton)
    }

    /**
     * Perform complete login with username and password
     * @param credentials - Object containing username and password
     */
    async loginToApplication(credentials: { username: string; password: string }) {
        await this.navigateToLoginPage()
        await this.enterUsername(credentials.username)
        await this.enterPassword(credentials.password)
        await this.clickLoginButton()
    }

}