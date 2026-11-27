import Link from 'next/link';
import styles from './AboutProfile.module.css';

export default function AboutProfile({ full = false }: { full?: boolean }) {
  return <section id="about-dr-susheel" className={`${styles.section} ${full ? styles.full : styles.preview}`}>
    {!full && (
    <div className="sticky-section-title">
        <h1 className="section-h1">
        About Dr. Susheel Tyagi
        </h1>
    </div>
    )}
    <h2>A commitment to thoughtful medicine and better health.</h2>
    <p>Dr. Susheel Tyagi is a physician in Internal Medicine with a medical background from King George’s Medical University (KGMU). His professional interests span the understanding and management of complex medical conditions, including diabetes, hypertension, obesity, infectious diseases and metabolic disorders.</p>
    <p>His approach to medicine is centred on understanding the individual behind the condition — recognising that effective healthcare involves more than addressing symptoms. It requires careful evaluation, informed clinical decisions, patient awareness and continuity of care.</p>
    {full ? <>
    <p>With a focus on evidence-based medical practice, Dr. Tyagi believes in helping individuals make informed decisions about their health and understand the importance of prevention, timely diagnosis and appropriate treatment.</p>
    <h2>Medical Education &amp; Professional Background</h2>
    <p>A strong foundation in medical education and clinical knowledge forms the basis of Dr. Susheel Tyagi’s professional practice.</p>
    <p>He holds an MD in Internal Medicine from King George’s Medical University (KGMU), one of India’s established medical institutions.</p>
    <p>His professional credentials also include:</p>
    <ul><li>MD – Internal Medicine, King George’s Medical University (KGMU)</li><li>FICP</li><li>FACP</li><li>FIACM</li></ul>
    <p>These qualifications reflect his continued engagement with professional medical learning and development.</p>
    <h2>Areas of Clinical Interest</h2>
    <p>Internal Medicine involves understanding health conditions that can affect multiple organs and systems of the body. It requires a comprehensive approach to diagnosis, treatment and long-term health management.</p>
    <p>Dr. Tyagi’s clinical interests include:</p>
    <h3>Diabetes &amp; Metabolic Health</h3><p>Understanding metabolic health, diabetes management and the importance of individualised treatment and long-term monitoring.</p>
    <h3>Hypertension &amp; Cardiovascular Risk</h3><p>Evaluation and management of high blood pressure and associated health risks, with an emphasis on appropriate treatment and ongoing monitoring.</p>
    <h3>Obesity &amp; Weight-Related Health</h3><p>Understanding the relationship between weight, metabolism and overall health, and supporting appropriate medical management.</p>
    <h3>Infectious Diseases</h3><p>Clinical evaluation and management of infections through appropriate diagnosis, evidence-based treatment and patient care.</p>
    <h3>Internal Medicine</h3><p>A comprehensive approach to adult health conditions, particularly where symptoms, underlying conditions and multiple health factors require careful evaluation.</p>
    <h2>An Approach That Looks Beyond Symptoms</h2>
    <p>Good healthcare begins with listening, understanding and asking the right questions.</p>
    <p>Every individual has a different medical history, lifestyle, health risks and needs. A diagnosis should therefore be approached with attention to the complete clinical picture rather than isolated symptoms.</p>
    <p>Dr. Tyagi’s approach to patient care emphasises:</p>
    <h3>Understanding the individual</h3><p>Taking the time to understand medical history, symptoms, lifestyle and relevant health factors.</p>
    <h3>Evidence-based decisions</h3><p>Using established medical knowledge, appropriate investigations and clinical judgement to guide treatment decisions.</p>
    <h3>Prevention and awareness</h3><p>Encouraging individuals to understand their health, recognise risk factors and take appropriate preventive measures.</p>
    <h3>Continuity of care</h3><p>Recognising that many health conditions require ongoing attention, follow-up and adjustments to treatment over time.</p>
    <h2>Beyond Treatment: Building Better Health Awareness</h2>
    <p>Healthcare should not begin and end with a medical consultation.</p>
    <p>Understanding health conditions, knowing when to seek medical attention and making informed lifestyle decisions are important parts of long-term wellbeing.</p>
    <p>Through health education and patient awareness, the aim is to make medical information easier to understand and help individuals participate more actively in decisions concerning their health.</p>
    <h2>Consultation &amp; Practice</h2>
    <p>Dr. Susheel Tyagi’s clinical practice is based in Indirapuram, Ghaziabad, Uttar Pradesh.</p>
    <p>Patients can enquire about consultations and available medical services through the clinic.</p>
    <p><strong>Dr. Susheel Tyagi</strong><br/>MD – Internal Medicine<br/>Indirapuram, Ghaziabad, Uttar Pradesh, India<br/><strong><a href="tel:+919625878756">+91 96258 78756</a> · <a href="tel:+917303190200">+91 73031 90200</a></strong></p>
    </> : <Link className={styles.more} href="/about">Explore More <span aria-hidden="true">→</span></Link>}
  </section>;
}
