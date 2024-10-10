import styled from "styled-components";
import "./projects.css";
import { Link } from "react-router-dom";
import DDButton from "../Components/DropDownButton";

const Box = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 26px;
  background: var(--Primary-Dark);
  box-sizing: border-box;
`;
const BoxInnerRoundedHalf = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 16px;
  border: 1px solid var(--Primary-Light);
`;
const RoundedHalfInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
function TransformativeMentoring() {
  return (
    <div className="page-container">
      <div className="title-frame">
        <h1 className="projects-title-h">TRANSFORMATIVE MENTORING</h1>
        <p className="projects-title-p">
          Personalised one-to-one sessions for women travelling the midlife
          journey of rebirth
        </p>
      </div>
      <section className="section-frame" key="Foreword">
        <div className="section-text-container">
          <h3>Foreword</h3>
          <p>
            Whether in the early days of your midlife metamorphosis or in the
            middle of your menopausal years, these sessions provide a{" "}
            <b>
              <i>structure</i>
            </b>{" "}
            to{" "}
            <b>
              <i>initiate your Midlife Rebirth</i>
            </b>{" "}
            and offer{" "}
            <b>
              <i>guidance</i>
            </b>{" "}
            as you tread its winding path.{" "}
            <b>
              <i>Each person’s journey is different</i>
            </b>
            , and as your transformative mentor, I offer{" "}
            <b>
              <i>guidance and gentle accountability</i>
            </b>{" "}
            as you dive deep into{" "}
            <b>
              <i>discovering your purpose</i>
            </b>{" "}
            in the second half of life. 
          </p>
          <p>
            While these sessions share themes and practices that are similar to
            my course, Birthing Wisdom, what makes it distinct is that it is a
            personalised, solo journey, built around you and your process.
          </p>
          <p>
            If you’re interested in a{" "}
            <b>
              <i>group journey</i>
            </b>{" "}
            of discovery and rebirth, take a look at{" "}
            <b>
              <i>Birthing Wisdom</i>
            </b>{" "}
            here.
          </p>
          <div className="col-to-row">
            <Link to={"/birthing-wisdom"} className="primary-button">
              <p>Birthing Wisdom</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-frame-dark" key="what is mentoring?">
        <div className="section-text-container">
          <h3 className="white">
            What is <i>mentoring</i> and how does it <i>differ</i> from{" "}
            <i>therapy</i>?
          </h3>
          <p className="white">
            While mentoring is similar to therapy, both offering supportive
            methods and practices, the two are different.
          </p>
          <p className="white">
            Therapy helps answer the question:
            <br />
            How do I heal and become happier?
            <br />
            It focuses on the past. It builds self-awareness.
          </p>
          <p className="white">
            Mentoring helps answer the question:
            <br />
            What’s my unique purpose and offering?
            <br />
            It focuses on the present. It builds awareness of your own soul.
          </p>
          <p className="white">
            A mentor offers guidance based on the experience of having walked
            where you are walking now.
          </p>
        </div>
      </section>
      <section className="section-frame-dark" style={{ padding: 0 }}>
        <line className="line-white" />
      </section>
      <section className="section-frame-dark" key="what is TM?">
        <div className="section-text-container">
          <h3 className="white">
            What is <i>Transformative Mentoring</i>?
          </h3>
          <p className="white">
            Transformative Mentoring is a bespoke one-to-one journey with the
            explicit goal of helping women to connect to their purpose and find
            their voice. You already hold these vital parts of you within
            yourself, and as our bodies change in menopause, it invites us
            inward on a journey of rediscovery. Transformative Mentoring is the
            practice of journeying into the centre of self to meet your soul,
            and then return, bearing its gifts.
          </p>
          <p className="white">
            The Midlife Rebirth is a pilgrimage—a circumambulation—a walk around
            your truest self. But each woman’s journey is different, each
            pilgrimage takes a new path, and so each time I mentor a woman on
            this journey, I use my techniques in the way that is right for her,
            at that moment. This makes the structure of this journey somewhat
            hard to define.
          </p>
        </div>
      </section>
      <section
        className="section-frame"
        key="what will your journey look like?"
      >
        <div className="section-text-container">
          <h3>
            So, what will <i>Your Journey</i> look like?
          </h3>
          <p>
            Whilst no two journeys are the same, which makes describing what a
            journey will look like difficult, there are some common themes and
            questions that appear more often than not. I will share these with
            you, so that you can see if these sessions might be right for you.
          </p>
          <p>
            <b>
              <i>1. All journeys begin with three simple questions, </i>
            </b>
            these will help to shape your journey into the path that is right
            for you:
          </p>
          <p className="libre center">
            <i>
              Where are you on your journey?
              <br />
              What do you want to let go?
              <br />
              What is your deepest longing?
            </i>
          </p>
          <p>
            <b>
              <i>2. Spiritual Change: </i>
            </b>
            In my work with midlife women, I’ve noticed a spiritual pattern of
            change that occurs naturally during menopause and the early wisdom
            years.
          </p>
          <p className="libre center">
            <i>
              A woman seeks solitude.
              <br />
              She grows in self-awareness.
              <br />
              She wants to generously offer her gifts.
            </i>
          </p>
          <p>
            <b>3. Soulful Questioning: </b>I’ve also noticed a series of common
            questions that women ask:
          </p>
          <p className="libre center">
            <i>
              Who am I now?
              <br />
              What’s my purpose?
              <br />
              In this change, what spiritual wisdom is my body offering?
              <br />
              How do I really feel about death and grief and loss?
              <br />
              How can I live a more soul-infused life?
              <br />
              How can I contribute to my community?
              <br />
              What kind of elder do I want to be?
            </i>
          </p>
          <p>
            Through Transformative Mentoring, I help you discover your answers
            to these questions.
          </p>
          <p>
            <b>
              <i>4. Your Journeys Conclusion: </i>
            </b>
            Since Transformative Mentoring is a journey, with a beginning,
            middle, and end, I encourage one of the following activities as a
            way to mark your rebirth and as a conclusion to our time together.
            You’ll know what feels right for you.
          </p>
          <p className="libre center">
            <i>
              Narrating your story of rebirth in art or in the writing of your
              personal myth.
              <br />
              A ceremony to mark your passage.
              <br />
              Writing your Wise Woman commitment.
            </i>
          </p>
          <p>
            <b>
              <i>5. My Tool and Practices: </i>
            </b>
            I offer the following tools to help you in your transformation. My
            objective is to support you on your journey. These tools help you
            dive deeper into the centre of you and to discover your purpose.
            During your journey we will discover which tools your soul needs.
            Perhaps we will invent some new ones. We will always work with what
            feels right to you.
          </p>
          <Box style={{ padding: 10 }}>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Nature</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Story</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Archetypes</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Creativity</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Meditation</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Soul-centric Journaling</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Ceremony</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
            <BoxInnerRoundedHalf>
              <RoundedHalfInnerTop>
                <h4 className="white">Experience</h4>
                <DDButton bg="var(--Primary-Light)" />
              </RoundedHalfInnerTop>
            </BoxInnerRoundedHalf>
          </Box>
          <p>
            <b>
              <i>6. Journey these sessions could take you on: </i>
            </b>
            These are just some of the many ways that my clients use these
            sessions.
          </p>
          <ul>
            <li className="libre">Weaving spirituality into your life</li>
            <li className="libre">
              Living authentically, aligning your inner self with your work
            </li>
            <li className="libre">
              Developing a loving relationship with your body
            </li>
            <li className="libre">
              Exploring the wild feminine through myth and nature connection
            </li>
            <li className="libre">
              Healing and unifying your inner masculine and feminine
            </li>
            <li className="libre">
              Working with internal and external resistances and inner critics. 
            </li>
            <li className="libre">
              Practising self-love, self-acceptance, and self-loyalty
            </li>
            <li className="libre">Finding your mythopoetic identity</li>
            <li className="libre">Exploring your expanding creativity</li>
            <li className="libre">Integration of your rebirthing journey</li>
            <li className="libre">
              Embodiment of your soul’s purpose and calling
            </li>
          </ul>
        </div>
      </section>
      <section className="section-frame-dark" key="my role">
        <div className="section-text-container">
          <h3 className="white">
            My role as your <i>Transformative Mentor</i>
          </h3>
          <p className="white">
            As your mentor, I’m like a midwife, holding space for you to rebirth
            your truest self, the most sacred part of you. I’m here to stand
            guard as you birth your unique wise woman elder.
          </p>
          <p className="white">
            I offer a unique perspective from years of working with women in
            various stages of spiritual development. I bring 30+ years grounding
            in the spirituality of transformation, the study of the feminine
            life cycle, and a training ranging from the ordained priesthood to a
            variety of meditative and somatic practices. At the core of my work
            is my desire to reunite the division of the body and soul. I’m
            currently a Mentor for The Purpose Guide Institute, a poet, and an
            artist. 
          </p>
          <p className="white">
            <b>I believe in your body’s intelligence.</b> That you have a deep
            intuitive sense about what’s right for you on this journey. My
            training in Focusing, an experience-based practice of
            self-reflection and meditation, helps locate that felt sense within.
          </p>
          <p className="white">
            <b>I am committed to listening, deeply, to your soul,</b> looking
            for your lost threads, I’m committed to working with you to help
            weave your purpose-filled life. To rediscover your innate wholeness.
          </p>
          <p className="white">
            <b>I’ve walked this midlife journey.</b> I know the themes and the
            patterns. I know its sacred path.
          </p>
        </div>
      </section>
      <section className="section-frame-dark" style={{ padding: 0 }}>
        <line className="line-white" />
      </section>
      <section className="section-frame-dark" key="the details">
        <div className="section-text-container">
          <h3 className="white">
            The <i>Details</i>
          </h3>
          <p className="white">
            While I offer single sessions, deep transformational work often
            needs 3, 6, or 12 sessions. I will follow your lead about what feels
            right for you. All these sessions will be held online, via a
            video-call.
          </p>
          <p className="white">
            One 75-minute Session:
            <br />£100
          </p>
          <p className="white">
            Three 75-minute Sessions:
            <br />£275
          </p>
          <p className="white">
            Six 75-minute Sessions:
            <br />£575
          </p>
        </div>
      </section>
    </div>
  );
}

export default TransformativeMentoring;
