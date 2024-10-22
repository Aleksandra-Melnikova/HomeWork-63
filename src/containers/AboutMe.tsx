import NSTU from "../assets/NSTU.jpg";
import Novosibirsk from "../assets/Novosibirsk.jpg";

const AboutMe = () => {
  return (
    <div className="container my-5 clearfix">
      <div>
        <h2 className="mb-2">Biography</h2>
        <img
          className="img-thumbnail w-50 rounded float-start me-3"
          src={Novosibirsk}
          alt="Novosibirsk"
        />

        <p className="text-start mt-3 fs-4">
          {" "}
          I was born in the city of Novosibirsk. And I lived in the Novosibirsk
          region until I was 20 years old. I received my secondary education at
          Berezovskaya secondary school No. 12. In 2010, I graduated with a gold
          medal. At school, I focused on mathematics and physics, but I also
          liked and found humanities subjects easy.
        </p>
        <p className="text-start mt-3 fs-4">
          In parallel with her schooling, she graduated from a music school in
          guitar class, and successfully practiced vocal in a vocal studio.
        </p>
        <p className="text-start mt-3 fs-4">
          In 2012, I moved to live in the Altai Mountains, in a very beautiful
          and truly cosmic place near the border with Mongolia, Kosh-Agach.
          While living and working there, I continued my university studies.
        </p>
        <p className="text-start mt-3 fs-4">
          In 2016 I moved to the cultural capital of Siberia, the city of Tomsk
          and lived there for 1 happy year
        </p>
        <p className="text-start mt-3 fs-4">
          I came to warm sunny Kyrgyzstan at the end of 2017 and I've been
          living here until now, for 7 years. Kyrgyzstan is very much to my
          liking. It is a warm, sunny country with truly kind, tolerant and
          humane people..
        </p>
      </div>

      <div>
        <h2 className="mb-2">Education</h2>
        <img
          className="img-thumbnail w-50 rounded float-start me-3"
          src={NSTU}
          alt="Novosibirsk State Technical University"
        />
        <p className="text-start mt-3 fs-4">
          {" "}
          In 2010 I entered the Novosibirsk State Technical University. In 2010,
          I entered Novosibirsk State Technical University, faculty of
          Mechatronics and Automation, majoring in Electrical Engineering,
          Electromechanics and Electrotechnology.
        </p>
        <p className="text-start mt-3 fs-4 mb-5">
          In 2015 I graduated from the university with a specialization in
          “Electric drive and automation of electro-technological installations
          and technological complexes” was awarded a quasi-qualification.
          installations and technological complexes” was awarded the
          qualification ‘engineer’.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
