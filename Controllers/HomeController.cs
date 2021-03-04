using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Ooui.AspNetCore;
using OSDUAcademy.Models;
using OSDUAcademy.Pages;
using Xamarin.Forms;

namespace OSDUAcademy.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var page = new NavigationPage(new MainPage());
            var element = page.GetOouiElement();
            return new ElementResult(element, "Hello from XAML!");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
