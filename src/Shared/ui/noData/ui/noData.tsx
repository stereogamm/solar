import styles from "../css/noData.module.css"
import { IconUniverse } from "@tabler/icons-react";


type NoDataProps = {
    text: string;
}

export const NoData  = ({text} : NoDataProps) => {

        return(
            <div className={styles.text}>
                <IconUniverse  size={'m'} stroke={'xxs'} />
                <h2>{text}</h2>
            </div>
        )
}