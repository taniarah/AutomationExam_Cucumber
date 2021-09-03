package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.DashboardPage;
import page.TestBase;

public class DashboardStepDefinition extends TestBase {
	DashboardPage dashboardPageObj;

	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String buttonName) throws Throwable {
		initDriver();
		driver.get("https://techfios.com/test/101/index.php");
		dashboardPageObj = PageFactory.initElements(driver, DashboardPage.class);

		String actualButtonText = null;
		String expectedButtonText = null;

		if (buttonName.equals("Set SkyBlue Background")) {
			actualButtonText = dashboardPageObj.getBlueButtonText();
			expectedButtonText = "Set SkyBlue Background";
		} else {
			actualButtonText = dashboardPageObj.getWhiteButtonText();
			expectedButtonText = "Set White Background";
		}

		Assert.assertEquals("Button not found", expectedButtonText, actualButtonText);
	}

	@When("^I click on the blue button$")
	public void i_click_on_the_blue_button() throws Throwable {
		dashboardPageObj.clickOnSkyBlueBackGroundElement();

	}

	@Then("^The background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() throws Throwable {

		String actualColor = dashboardPageObj.getBackgroundColor();

		String expectedColor = "rgba(135, 206, 235, 1)"; // sky blue

		Assert.assertEquals("Color is not sky blue", expectedColor, actualColor);

	}

	@When("^I click on the white button$")
	public void i_click_on_the_white_button() throws Throwable {
		dashboardPageObj.clickOnWhiteBackGroundElement();

	}

	@Then("^The background color will change to white$")
	public void the_background_color_will_change_to_white() throws Throwable {
		String actualColor = dashboardPageObj.getBackgroundColor();

		String expectedColor = "rgba(255, 255, 255, 1)"; // white

		Assert.assertEquals("Color is not white", expectedColor, actualColor);

	}

}
