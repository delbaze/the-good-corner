import Form from "@/components/ads/Form";
import FormReactHook from "@/components/ads/FormReactHook";
import styles from "@/styles/pages/ads/Form.module.css";
function CreateAd() {
  return (
    <div className={styles.formBloc}>
      {/* <Form /> */}
      <FormReactHook />
    </div>
  );
}
export default CreateAd;
