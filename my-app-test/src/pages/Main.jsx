import React from 'react';
import s from '../styles/Main.module.css';
import ava from '../assets/images/ava.png';
import banner from '../assets/images/banner.jpg';

const Main = () => {
  return (
    <div className={s.pageWrapper}>
      <h1 className='main-page__supTitle'>Это главная страница!</h1>
      <header>
        <h1 className={s.entryTitle}>Абдуллоев Мухаммаджон | АВТОРСКИЙ БЛОГ</h1>
      </header>
      <div>
        <div className={s.contentArea}>
          <a title='Блог с рассказами о серхъестественном и приключениях'>
            <img src={banner} alt='' className={s.banner} />
          </a>
          <div>
            <article>
              <div className={s.entryContent}>
                <div className={s.title}>
                  <p>
                    <h2>Краткая биография о авторе</h2>
                  </p>
                </div>
                <div>
                  <img src={ava} title='Авторский блог' className={s.ava} />
                </div>

                <p></p>
                <p>
                  <strong style={{ color: '#235713' }}>Дата рождения: </strong> 1982г
                  <br />
                </p>
                <p>
                  <strong style={{ color: '#235713' }}>Сфера деятельности: </strong>{' '}
                  Писатель
                </p>

                <p>Уважаемые посетители!</p>
                <p>На этом сайте вы найдете увлекательные истории и новеллы</p>
                {/* <p>
                    Они находятся в разделе <NavLink to='/blog'>БЛОГ</NavLink>{' '}
                  </p> */}
                <p>
                  <strong style={{ font: 'bold' }}>Примечание:</strong> Для того чтобы
                  получить доступ{' '}
                </p>
                <p>
                  к данному разделу вам необходимо авторизоваться на сайте под любым
                  именем и паролем.
                </p>

                <p>
                  <strong style={{ font: 'bold' }}>Биография:</strong>
                </p>
                <p>
                  {' '}
                  Автором всех рассказов являюсь я - Абдуллоев Мухаммаджон. Я написал их в
                  2009-2013гг.{' '}
                </p>
                <p>
                  Вдохновение на написание доброй половины рассказов я черпал из
                  детско-подростковых грёз о телепортации, путешествиях.
                </p>
                <p>
                  На остальную половину меня сподвигли реальные жизненные ситуации. В
                  частности виртуальная любовь, ошибки юности и иные ситуации.{' '}
                </p>

                <p>Приятного досуга и чтения! </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
