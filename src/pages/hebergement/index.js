import styled from "styled-components";

const Hebergement = () => {
  return (
    <Container>
      <div class="wrap full-wrap">
        <div class="main-wrap">
          <section class="main main-archive">
            <div class="loop">
              <article class="post format-gallery post_format-post-format-gallery">
                <div class="inner">
                  <h2 class="entry-title">
                    <a href="#" title="Running through Chicago">
                      Hébergement sur place
                    </a>
                  </h2>

                  <div class="post-content">
                    <blockquote>
                      <p className="text-normal">
                        Des chambres sont disponibles sur place en priorité pour
                        la famille et les témoins.
                      </p>
                    </blockquote>
                    <blockquote>
                      <p className="text-normal">
                        Pour les plus couche tard d'entre vous un grand dortoir
                        d'une vingtaine de places se trouve à côté de la salle
                        de soirée, n'hesitez pas à vous rapprocher de nous pour
                        y reserver une place.
                      </p>
                    </blockquote>
                    <blockquote>
                      <p className="text-normal">
                        Pour les plus aventuriers ou ceux en manque de
                        randonnées dans les grands espaces, vous avez également
                        la possibilité de planter votre tente dans le parc du
                        domaine.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </article>
              <article class="post format-gallery post_format-post-format-gallery">
                <div class="inner">
                  <h2 class="entry-title">
                    <a href="#" title="Running through Chicago">
                      Les hébergements à proximité
                    </a>
                  </h2>

                  <div class="post-content">
                    <p>
                      Si vous souhaitez réserver une chambre à proximité du
                      mariage, voici une liste de chambres d'hôtes disponibles.
                      Vous pourrez aussi trouver d'autres alternatives sur les
                      sites habituels comme airbnb ou booking.
                    </p>
                    <blockquote>
                      <h4>Chez Brigitte</h4>
                      <p className="text-normal">Le Cornier - A 2 km</p>
                      <p className="text-normal">02 32 36 81 13</p>
                    </blockquote>
                    <blockquote>
                      <h4>Amaury de Tilly</h4>
                      <p className="text-normal">
                        32 Rue Roederer, 27120 Ménilles - A 7 km
                      </p>
                      <p className="text-normal">06 72 84 91 89</p>
                      <a
                        href="http://www.les-hautes-sources.fr"
                        target="_blank"
                        rel="noreferrer"
                        className="text-normal"
                      >
                        www.les-hautes-sources.fr
                      </a>
                    </blockquote>
                    <blockquote>
                      <h4>Isabelle Hubert </h4>
                      <p className="text-normal">
                        1 bis, rue de la fosse Corbin, 27120 Le Plessis-Hebert -
                        A 7 km
                      </p>
                      <p className="text-normal">06 18 72 26 98</p>
                      <p className="text-normal">
                        Maison de 7 chambres pour 14 personnes
                      </p>
                      <p className="text-normal">hubertisabelle3@gmail.com</p>
                    </blockquote>
                    <blockquote>
                      <h4>Bel ami Hôtel </h4>
                      <p className="text-normal">Pacy sur Eure - A 8 km</p>
                      <p className="text-normal">02 32 36 36 30</p>
                    </blockquote>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export default Hebergement;
