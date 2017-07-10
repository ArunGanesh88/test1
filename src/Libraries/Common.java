package Libraries;


public class Common extends Driver 
{
	public static void openbw()
	{
		try
		{
			
			Browser.OpenBrowser("chrome", "https://www.google.co.in/");
			Result.takescreenshot("Open Google");
			Browser.WebEdit.Set("GoogleSearch", getdata("GoogleSearch"));
			Browser.WebButton.click("SearchButton");
			Result.takescreenshot("Search GitHub");
			Thread.sleep(5000);
			Browser.WebLink.click("GitHubLink");
			Result.takescreenshot("Select GitHub Link");

		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}	
	
	
}
