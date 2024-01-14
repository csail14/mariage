import styled from "styled-components";

const Liste = () => {
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
                      Liste de mariage
                    </a>
                  </h2>

                  <div class="post-content">
                    <p>
                      Une urne sera disponible sur place si vous souhaitez nous
                      gater. Si vous preferez gérer ça en ligne vous trouverez
                      une liste de mariage{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.millemercismariage.com/avantages/liste-de-mariage/liste-personnalisee.html"
                      >
                        {" "}
                        ici
                      </a>
                    </p>
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

export default Liste;
