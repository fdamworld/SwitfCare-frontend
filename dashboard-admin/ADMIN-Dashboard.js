const profile = document.querySelector(".profile");

      profile.addEventListener("click", () => {
        profile.classList.toggle("active");
      });

      const today = new Date();

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      document.getElementById("currentDate").innerHTML = `${
        months[today.getMonth()]
      } ${today.getDate()}, ${today.getFullYear()} | ${days[today.getDay()]}`;

      const patientMenu = document.querySelector(".has-submenu");

      patientMenu
        .querySelector(".menu-toggle")
        .addEventListener("click", function (e) {
          e.preventDefault();
          patientMenu.classList.toggle("active");
        });
