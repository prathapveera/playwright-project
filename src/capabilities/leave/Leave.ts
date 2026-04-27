import WebActions from "../../helpers/ui/WebActions";
import leaveTabLocators from "../../locators/leave.json"

export default class LeaveTab extends WebActions {
    constructor(page: any) {
        super(page)
    }

    /**
     * Apply leave by selecting leave type
     */
    async applyLeave() {
        await this.clickElement(leaveTabLocators.leaveTab)
        
    }

    /**
     * Click Apply menu item from topbar navigation
     */
    async clickApply() {
        await this.clickElement(leaveTabLocators.applyLink)
    }

    /**
     * Click My Leave menu item from topbar navigation
     */
    async clickMyLeave() {
        await this.clickElement(leaveTabLocators.myLeaveLink)
    }

    /**
     * Click Leave List menu item from topbar navigation
     */
    async clickLeaveList() {
        await this.clickElement(leaveTabLocators.leaveListLink)
    }

    /**
     * Click Assign Leave menu item from topbar navigation
     */
    async clickAssignLeave() {
        await this.clickElement(leaveTabLocators.assignLeaveLink)
    }

    /**
     * Click Entitlements dropdown menu from topbar navigation
     */
    async clickEntitlementsMenu() {
        await this.clickElement(leaveTabLocators.entitlementsMenu)
    }

    /**
     * Click Reports dropdown menu from topbar navigation
     */
    async clickReportsMenu() {
        await this.clickElement(leaveTabLocators.reportsMenu)
    }

    /**
     * Click Configure dropdown menu from topbar navigation
     */
    async clickConfigureMenu() {
        await this.clickElement(leaveTabLocators.configureMenu)
    }

    /**
     * Click Help button from topbar navigation
     */
    async clickHelpButton() {
        await this.clickElement(leaveTabLocators.helpButton)
    }

    /**
     * Navigate to menu item by name
     * @param menuName - Name of the menu item to navigate to
     */
    async navigateToMenuItem(menuName: string) {
        const menuMap: { [key: string]: any } = {
            "Apply": leaveTabLocators.applyLink,
            "My Leave": leaveTabLocators.myLeaveLink,
            "Leave List": leaveTabLocators.leaveListLink,
            "Assign Leave": leaveTabLocators.assignLeaveLink,
        };

        if (menuMap[menuName]) {
            await this.clickElement(menuMap[menuName]);
        } else {
            throw new Error(`Menu item "${menuName}" not found`);
        }
    }
}