import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Blogpost = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Embracing Change: Navigating the Winds of Transformation
          </h1>
          <p className={styles.desc}>
            Mindfulness practices, such as meditation and self-reflection, anchor us in the present moment. In the midst of change, these practices build resilience, allowing us to face challenges with a calm and centered mindset. As we ride the waves of transformation, mindfulness becomes the compass that keeps us on course.
          </p>
          <div className={styles.authorBox}>
            <Image
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              width={40}
              height={40}
              className={styles.authorImg}
            />
            <span className={styles.userName}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/15894610/pexels-photo-15894610/free-photo-of-landscape-with-dry-grass-on-black-soil-terrain-and-rocky-mountain-in-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
          <p className={styles.contentText}>
            Change, the one constant in life, is a dynamic force that shapes our journey through the world. In the intricate dance of existence, we find ourselves navigating the ever-shifting tides of transformation. The essence of change lies not only in its inevitability but in the profound impact it can have on our personal growth, relationships, and professional endeavors.
          </p>
          <p className={styles.contentText}>
            To truly embrace change, we must first understand its nature. Change is a multifaceted phenomenon, capable of both invigorating and challenging us. Its inevitability is a truth we cannot escape. It sweeps through our lives, leaving an indelible mark on our perceptions, choices, and aspirations. The acceptance of this inevitability becomes the cornerstone of our ability to welcome change with open arms.
          </p>
          <p className={styles.contentText}>
            Amid the uncertainty that change often brings, there exists a landscape of opportunities waiting to be discovered. It is during these transformative moments that we unearth our potential for innovation, resilience, and adaptation. Embracing change requires a mindset that goes beyond the fear of the unknown, seeing challenges as stepping stones and setbacks as invaluable lessons on the path to personal evolution.
          </p>
          <p className={styles.contentText}>
            The journey of navigating change is akin to sailing through uncharted waters. To sail successfully, one must cultivate a growth mindset — a perspective that views every twist and turn as a chance for learning and development. This mindset propels us forward, allowing us to harness the winds of change rather than be tossed about by them.
          </p>
          <p className={styles.contentText}>            
            Adaptability and flexibility become our navigational tools in the face of change. Rigidity, a trait that may have provided stability in calmer waters, becomes a hindrance. It is the ability to adjust our sails, to pivot when necessary, that ensures not only survival but the thriving in the midst of uncertainty.
          </p>
          <p className={styles.contentText}>
              Continuous learning emerges as a vital aspect of our navigation toolkit. The commitment to lifelong learning equips us with the skills needed to thrive in dynamic environments. Whether through formal education, self-directed learning, or seeking mentorship, the pursuit of knowledge becomes a beacon guiding us through the fog of change.
          </p>
          <p className={styles.contentText}>
            Mindfulness practices, such as meditation and self-reflection, anchor us in the present moment. In the midst of change, these practices build resilience, allowing us to face challenges with a calm and centered mindset. As we ride the waves of transformation, mindfulness becomes the compass that keeps us on course.
          </p>
          <p className={styles.contentText}>
            Change, however, is not confined to one aspect of our lives. It permeates both the personal and professional spheres, demanding our attention and adaptability.
        </p>
          <p className={styles.contentText}>
            In the workplace, change is a constant. The ability to embrace change becomes a defining factor in our success. In the face of change, we must cultivate a growth mindset, viewing challenges as opportunities for learning and development. The pursuit of knowledge, coupled with adaptability and flexibility, allows us to thrive in dynamic environments. 
          </p>
          <p className={styles.contentText}></p>
            In the tapestry of personal relationships, change is an ever-present thread. Embracing change within relationships requires effective communication, understanding, and a willingness to evolve together. Change becomes an opportunity for deeper connections, shared experiences, and the strengthening of bonds that withstand the test of time.
          <p/>
          <p className={styles.contentText}>
            In conclusion, the ability to embrace change becomes a defining factor in our personal and collective success. Rather than fearing the unknown, let us cultivate a mindset that welcomes the winds of transformation, knowing that within change lies the potential for growth, innovation, and a more fulfilling life. As we navigate the currents of change, let us not only survive but thrive, using each shift as an opportunity to become the best versions of ourselves.
          </p>
      </div>
    </div>
  )
}

export default Blogpost