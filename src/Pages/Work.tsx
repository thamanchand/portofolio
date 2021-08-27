import * as React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { WorkStyle } from '../Style/Index';
import { Perukirajone, P2, P3, Blockbank } from '../Constants/Images';

const data = [
  { id: 1, url: 'perukirjakone', title: 'Perukirjakone', desc: 'Perukirjakone want to revolutionize last will by automating legal contracts.', image: Perukirajone, tags: 'React JS', live: true },
  { id: 2, url: 'muuvz', title: 'Muuvz', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P2, tags: 'React Native', live: false },
  { id: 2, url: 'testamenttikone', title: 'Testamenttikone', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P2, tags: 'React Native', live: false },
  { id: 3, url: 'blockbank', title: 'Blockbank', desc: 'Manage. Secure. Blockchain.', image: Blockbank, tags: 'React JS' },
  { id: 4, url: 'testamenttikeskus', title: 'Testamenttikeskus', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P2, tags: 'Angular', live: true },
  { id: 5, url: 'iisifixi', title: 'IISIFIXI', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: Perukirajone, tags: 'Node JS', live: true },
  { id: 6, url: 'aures', title: 'Aures', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'Angular', live: true },
  { id: 7, url: 'northcatalyst', title: 'NorthCatalyst', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'Angular', live: true },
  { id: 8, url: 'buzztatto', title: 'Buzztatto', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'Angular', live: true },
  { id: 8, url: 'illustrations', title: 'Illustrations', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'Angular', live: true },
]

const Modal = ({ handleClose, show, content }) => {
  console.log(JSON.stringify(content, null, 2))
  const style = WorkStyle();
  return (
    <div className={show && style.modal} style={show ? {display: 'flex'} : {display: 'none'}}>
      <div className={style.modal__content}>
        <span className={style.modal__close} onClick={handleClose} />
        <h3 className={style.modal__heading}>hello</h3>
        <div className={style.modal__content_portfolio}>
          <img src="image.png" alt="react" className={style.image} />
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>

        </div>
      </div>
    </div>
  );
};

const Work: React.FC<{}> = () => {
  const style = WorkStyle();

  const [showModal, setShowModal] = React.useState(false);
  const [selectedIndex, setIndex] = React.useState(0);
  const [selectedContentId, setSelectedContentId] = React.useState(null);

  const filters = ['All', 'React JS', 'Redux', 'UI', 'Angular', 'Strapi'];
  const handleFilter = value => {
    setIndex(value);
  };

  const showModalHandler = (id) => {
    console.log("showModalHandler", id)
    setSelectedContentId(id)
    document.body.style.overflowY = "hidden";
    setShowModal(true);
  }

  const hideModalHandler = () => {
    document.body.style.overflowY = "auto";
    setShowModal(false);
  }


  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        {filters.map((filter, index) => {
          return (
            <Typography variant="body2" className={selectedIndex === index ? style.selectedFilter : style.filter} onClick={() => handleFilter(index)}>{filter}</Typography>
          )
        })}
      </div>
      <Grid container >
        {data.map(d => {
          return (
            <Grid item xs={12} sm={6} md={4} className={style.projectContainer} key={d.id}>
              <Card>
                <CardMedia className={style.imageContainer}>
                  <img src={d.image} alt="react" className={style.image} />
                 
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={style.projectTitle}>{d.title}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {d.desc}
                  </Typography>

                  <div className={style.buttonContainer}>
                    <Link to={d.url} className={style.link}>
                      <span>
                        Read more..
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Modal
        show={showModal}
        handleClose={hideModalHandler}
        content={data.filter(item => item.id === selectedContentId)}
      />
    </div>
  );
};
export default Work;
