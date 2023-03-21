const reflist = document.querySelectorAll(".take")

  //create observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting
              ? entry.target.classList.add(`animate`)
              // : entry.target.classList.remove(`${s.animate}`); causing glitch
              :null
          });
        });
        //tell observer to observe each el on the reflist
        reflist.forEach((el) => {
          observer.observe(el);
        });