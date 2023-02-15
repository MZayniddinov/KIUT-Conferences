//SCSS
import "./InfoAbout.scss";

const InfoAbout = () => {
  return (
    <section className="about-info">
      <div className="container">
        <h3 className="about-info__title">ABOUT US</h3>
        <div className="about-info__content">
          <p className="about-info__text">
            Kimyo International University in Tashkent, the first private higher
            education institution in the country, was initially established
            under the name of the Yeoju Technical Institute in Tashkent on the
            basis of the state license of the State Inspectorate for Supervision
            of the Quality in Education under the Cabinet of Ministers of the
            Republic of Uzbekistan No. 0002 (033297) dated 24.07.2018, as well
            as the resolution of the Cabinet of Ministers of the Republic of
            Uzbekistan No. 1007 dated 17.12.2019. <br /> The University trains
            highly qualified Bachelors and Masters in full-time, extramural and
            evening forms of study in Uzbek, Russian and English, as well as in
            the second specialty. Academic activities are carried out by
            international and local professors who are graduates of prestigious
            universities of foreign states, such as South Korea, the United
            States, Great Britain, Germany, France, Italy, Japan and Malaysia.{" "}
            <br />
            Currently, KIUT trains specialists in 28 Bachelor's degree programs
            and 20 Master's degree programs as part of 5 educational schools. In
            the 2021/2022 academic year, a branch of the university in Namangan,
            and in the 2022/2023 academic year, a branch of the university in
            Samarkand were established. In 2022, among the non-state
            universities of Uzbekistan, KIUT was one of the first to receive
            certificates of international accreditation of educational programs
            of the KAZSEE and IQAA agencies and was included in the European
            EQAR database. KIUT has all licenses for the provision of
            educational services, and the degree, issued by the university is
            fully recognized on the territory of Uzbekistan.
          </p>
          <div className="map-location">
            <iframe
              title="university-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17161.645225029253!2d69.23151183629184!3d41.264248513191895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bbe0da01105%3A0x83ab2e159ab60db9!2sKIMYO%20INTERNATIONAL%20UNIVERSITY%20IN%20TASHKENT!5e0!3m2!1sru!2s!4v1676265850339!5m2!1sru!2s"
              width={596}
              height={430}
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAbout;