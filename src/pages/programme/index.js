import styled from "styled-components";
import Nous from "../../assets/Flowers.jpg";
import Ceremonie from "../../assets/ceremonie.jpeg";
import Cocktail from "../../assets/cocktail.jpeg";
import Diner from "../../assets/diner.jpeg";
import Brunch from "../../assets/brunch.jpeg";
import Dimanche from "../../assets/dimanche.jpeg";

const Programme = () => {
  return (
    <Container>
      <h2 className="title">Le Programme</h2>
      <div class="home-sticky programme" id="content">
        <div class="sticky-inner">
          <h2 class="home-sticky-title jour">Samedi</h2>
          <p className="description">
            Nous nous retrouverons directement dans le parc du manoir des
            Prévanches pour l'ensemble des festivités. Un parking est disponible
            devant l'entrée principale.
          </p>
          <aside class="home-sticky-post post has-post-thumbnail sticky ">
            <h3 class="entry-title heure">
              <a>16h</a>
            </h3>
            <span class="post-image">
              <a>
                <img
                  width="402"
                  height="402"
                  src={Ceremonie}
                  class="attachment-sticky size-sticky round-image"
                  alt=""
                />
              </a>
            </span>

            <div class="inner">
              <ul class="meta top">
                <li class="time">
                  <h4 class="entry-title">Cérémonie religieuse</h4>
                </li>
              </ul>
            </div>
          </aside>
          <aside class="home-sticky-post post has-post-thumbnail sticky ">
            <h3 class="entry-title heure">
              <a>17h</a>
            </h3>
            <span class="post-image">
              <a>
                <img
                  width="402"
                  height="402"
                  src={Cocktail}
                  class="attachment-sticky size-sticky round-image"
                  alt=""
                />
              </a>
            </span>

            <div class="inner">
              <ul class="meta top">
                <li class="time">
                  <h4 class="entry-title">Cocktail</h4>
                </li>
              </ul>
            </div>
          </aside>
          <aside class="home-sticky-post post has-post-thumbnail sticky ">
            <h3 class="entry-title heure">
              <a>20h</a>
            </h3>
            <span class="post-image">
              <a>
                <img
                  width="402"
                  height="402"
                  src={Diner}
                  class="attachment-sticky size-sticky round-image"
                  alt=""
                />
              </a>
            </span>

            <div class="inner">
              <ul class="meta top">
                <li class="time">
                  <h4 class="entry-title">Diner et soirée</h4>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div>
          <h2 class="home-sticky-title jour">Dimanche</h2>
          <div className="dimanche">
            <aside class="home-sticky-post post has-post-thumbnail sticky ">
              <h3 class="entry-title heure">
                <a>à partir de 11h</a>
              </h3>
              <span class="post-image">
                <a>
                  <img
                    width="402"
                    height="402"
                    src={Brunch}
                    class="attachment-sticky size-sticky round-image"
                    alt=""
                  />
                </a>
              </span>

              <div class="inner">
                <ul class="meta top">
                  <li class="time">
                    <h4 class="entry-title">Petit dejeuner puis déjeuner</h4>
                  </li>
                </ul>
              </div>
            </aside>
            <aside class="home-sticky-post post has-post-thumbnail sticky ">
              <h3 class="entry-title heure">
                <a>A partir de 13h </a>
              </h3>
              <span class="post-image">
                <a>
                  <img
                    width="402"
                    height="402"
                    src={Dimanche}
                    class="attachment-sticky size-sticky round-image"
                    alt=""
                  />
                </a>
              </span>

              <div class="inner">
                <ul class="meta top">
                  <li class="time">
                    <h4 class="entry-title">Activités et repos post mariage</h4>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  padding: 40px;

  .round-image {
    height: 320px;
    width: 320px;
    margin: auto;
  }

  .programme {
    display: flex;
    flex-direction: column;
  }

  .heure {
    padding-bottom: 20px;
  }

  .jour {
    margin-bottom: 40px !important;
    font-size: 50px;
  }

  .description {
    text-align: left;
    font-size: 20px;
    margin-bottom: 40px;
  }

  .dimanche {
    display: flex;
    justify-content: center;
  }

  .title {
    text-align: center;
    padding-bottom: 50px;
    font-size: 60px;
  }

  .sticky-inner {
    padding: 0 50px;

    .post-image {
      padding: 0 50px;
    }
  }
`;

export default Programme;
