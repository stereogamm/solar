import styles from '../css/stargazing.module.css'
import { CustomForm } from '../../../Widgets/customForm/ui/customForm'

export const StargazingTonight = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['user-form']}>
            <CustomForm />
            </div>
        </div>
    )
}