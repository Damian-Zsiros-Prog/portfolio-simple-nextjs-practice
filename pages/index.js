import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, portfolio } from "../profile";

const Index = () => {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-8 text-light">
                <h1>Ryan Ray</h1>
                <h5>Fullstack developer</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ducimus, voluptatem cumque dolorem hic id quae?
                  Inventore saepe accusamus porro, illo molestias praesentium?
                </p>
                <Link href="/hireme">
                  <a className="btn btn-secondary border">Hire me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="row">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map((skill, i) => (
                <div className="skill py-3" key={i}>
                  <h5>{skill.name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: skill.percent + "%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul className="experiencies">
                {experiences.map((experience, i) => (
                  <li key={i} className="py-2 experience">
                    <h3>
                      {experience.job} in {experience.enterprise}
                    </h3>
                    <h5>
                      {experience.from}-{experience.to}
                    </h5>
                    <p>{experience.works}</p>
                  </li>
                ))}
              </ul>
              <Link href="/experiences">
                <a className="btn btn-light border">Know more</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="row portfolio">
        <div className="col-md-12">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center">Portfolio</h1>
                </div>
                {portfolio.map((project, i) => (
                  <div className="col-md-4 p-2 project" key={i}>
                    <div className="card text-dark ">
                      <div className="overflow">
                        <img
                          src={project.link_img}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link href={"/experience/" + project.title}>
                          <a className="btn btn-light border">Know more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
