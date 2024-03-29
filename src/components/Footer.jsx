import React from "react";
import "./Footer.css";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/ group links",
    },
    {
      name: "fab fa-linkedin",
      links: "https://www.linkdein.com/public-profile/in/",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users",
    },
  ];

<<<<<<< HEAD
    const icons = [
        {
            name: "fab fa-github", 
            link: "https://github.com/ group links"

        }, 
        {
            name: "fab fa-linkedin", 
            links: "https://www.linkdein.com/public-profile/in/"
        },
        {
            name: "fab fa-stack-overflow",
            size: "lg",
            link: "https://stackoverflow.com/users"
        }
    ]

    return ( 
        <section className="footer">
            <footer className="container">
                <div className="row"> 
                    <div className="col-lg-8 mx-auto text-center links">
                        {icons.map(icon =>
                        (
                            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                        )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    );
=======
  return (
    <section className="footer">
      <footer className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center links">
            {icons.map((icon) => (
              <a
                href={icon.link}
                key={icon.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon.name}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
>>>>>>> 89193005ab2cafa70fa3fe5dde68277850f2d2c4
}

export default Footer;
