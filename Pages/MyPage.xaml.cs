﻿using Xamarin.Forms;

namespace OSDUAcademy.Pages
{
    public partial class MyPage : ContentPage
    {
        public MyPage()
        {
            InitializeComponent();
        }

        int count = 0;
        void Handle_Clicked(object sender, System.EventArgs e)
        {
            var button = sender as Button;

            if (button == null)
                return;

            count++;
            button.Text = $"You clicked {count} times!";
        }
    }
}
