import React from "react";
import styles from "./css/About.module.css";

function About(){
    
    return(
        <>
        <div className={styles.container}>
            <div className = {styles.carou}>
                <h2>YocoLife</h2>
                <div>
                    <p>All in one site for cool Gadgets</p>
                </div>
            </div>
            <h4 className={styles.head}>About Our Company</h4>
            <div className={styles.div}>
                <div className={styles.imgDiv}>
                    <img src={require("../images/aboutUs.jpeg")}/>
                </div>
                <div className={styles.paraDiv}>
                    <p className={styles.paraHead}><strong>What makes our Company Special?</strong></p>
                        <p className={styles.para}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam omnis iusto? Reprehenderit possimus impedit nostrum perspiciatis sequi illo! Officiis beatae fuga aliquid et enim vel nostrum placeat quasi aspernatur?
                            Quasi autem libero iure omnis repellendus. Mollitia laborum amet suscipit, quia aspernatur quaerat perspiciatis eos cupiditate? Necessitatibus quasi quaerat, eum veniam, amet, quod error quos repellat odit ullam sequi illum?
                            Dicta, amet quidem? Soluta nemo necessitatibus aperiam blanditiis voluptate vero delectus nihil unde quibusdam eius voluptatibus iste impedit laboriosam, expedita facilis quae dolor, atque a maxime quia maiores cum? Eius.
                            Recusandae voluptate vel tempore tempora maiores dolore numquam voluptatibus, quos consectetur beatae veniam illum. Architecto aliquam nemo facilis odit error magni alias voluptates labore facere. Quod perspiciatis enim accusamus laboriosam.
                            Nostrum numquam consequatur, velit reprehenderit est atque sapiente, distinctio voluptatum impedit suscipit deleniti dignissimos doloremque fuga? Eaque dolores laudantium quo cupiditate necessitatibus excepturi quas debitis! Consequatur voluptatibus molestias rem veritatis.
                            Eum omnis, aperiam quibusdam facere vero quia iusto recusandae nobis a praesentium culpa non ratione inventore laboriosam, distinctio unde. Mollitia commodi similique asperiores, at in laudantium veniam inventore explicabo adipisci!
                            Iste incidunt laboriosam aperiam consectetur, repellendus neque. Accusantium illum odit culpa provident maxime aut ratione asperiores mollitia voluptatum fugit rem ducimus accusamus consequuntur, doloribus illo facilis nemo rerum nulla perspiciatis.
                            Aperiam, dolorum eveniet voluptate perspiciatis inventore magni eos corporis sapiente atque dicta eius distinctio numquam voluptatem sint quod, pariatur, similique assumenda? Nisi possimus vitae ab non sunt sed modi eum?
                            Provident tenetur placeat doloremque cumque ad sed quaerat! Voluptas similique cumque veniam saepe dolor officiis explicabo rerum ipsam facilis! Repudiandae alias quas eum, totam reprehenderit unde quam quasi harum eligendi.
                            Incidunt id ullam veniam, culpa necessitatibus commodi enim, dolores deleniti, delectus doloremque ipsum mollitia quae quis nesciunt autem? Id optio laboriosam velit iure amet exercitationem perspiciatis culpa fugiat. Exercitationem, omnis?
                    </p>
                </div>
            </div>
            <h4 className={styles.head}>Our Team</h4>
            <div className={styles.team}>
                <div className = {styles.oddTeam}>
                    <div className={styles.teamImg}>
                        <img alt="team member photo"/>
                        <p><strong>Name of Member</strong></p>
                        <p><strong>Designation</strong></p>
                    </div>
                    <div className={styles.teamBout}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam omnis iusto? Reprehenderit possimus impedit nostrum perspiciatis sequi illo! Officiis beatae fuga aliquid et enim vel nostrum placeat quasi aspernatur?
                        Quasi autem libero iure omnis repellendus. Mollitia laborum amet suscipit, quia aspernatur quaerat perspiciatis eos cupiditate? Necessitatibus quasi quaerat, eum veniam, amet, quod error quos repellat odit ullam sequi illum?
                        Dicta, amet quidem? Soluta nemo necessitatibus aperiam blanditiis voluptate vero delectus nihil unde quibusdam eius voluptatibus iste impedit laboriosam, expedita facilis quae dolor, atque a maxime quia maiores cum? Eius.
                        Recusandae voluptate vel tempore tempora maiores dolore numquam voluptatibus, quos consectetur beatae veniam illum. Architecto aliquam nemo facilis odit error magni alias voluptates labore facere. Quod perspiciatis enim accusamus laboriosam.
                        Nostrum numquam consequatur, velit reprehenderit est atque sapiente, distinctio voluptatum impedit suscipit deleniti dignissimos doloremque fuga? Eaque dolores laudantium quo cupiditate necessitatibus excepturi quas debitis! Consequatur voluptatibus molestias rem veritatis.
                        Eum omnis, aperiam quibusdam facere vero quia iusto recusandae nobis a praesentium culpa non ratione inventore laboriosam, distinctio unde. Mollitia commodi similique asperiores, at in laudantium veniam inventore explicabo adipisci!
                        Iste incidunt laboriosam aperiam consectetur, repellendus neque. Accusantium illum odit culpa provident maxime aut ratione asperiores mollitia voluptatum fugit rem ducimus accusamus consequuntur, doloribus illo facilis nemo rerum nulla perspiciatis.
                        </p>
                    </div>
                </div>
                <div className={styles.eveTeam}>
                    <div className={styles.teamImg}>
                        <img alt="team member photo"/>
                        <p><strong>Name of Member</strong></p>
                        <p><strong>Designation</strong></p>
                    </div>
                    <div className={styles.teamBout}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam omnis iusto? Reprehenderit possimus impedit nostrum perspiciatis sequi illo! Officiis beatae fuga aliquid et enim vel nostrum placeat quasi aspernatur?
                        Quasi autem libero iure omnis repellendus. Mollitia laborum amet suscipit, quia aspernatur quaerat perspiciatis eos cupiditate? Necessitatibus quasi quaerat, eum veniam, amet, quod error quos repellat odit ullam sequi illum?
                        Dicta, amet quidem? Soluta nemo necessitatibus aperiam blanditiis voluptate vero delectus nihil unde quibusdam eius voluptatibus iste impedit laboriosam, expedita facilis quae dolor, atque a maxime quia maiores cum? Eius.
                        Recusandae voluptate vel tempore tempora maiores dolore numquam voluptatibus, quos consectetur beatae veniam illum. Architecto aliquam nemo facilis odit error magni alias voluptates labore facere. Quod perspiciatis enim accusamus laboriosam.
                        Nostrum numquam consequatur, velit reprehenderit est atque sapiente, distinctio voluptatum impedit suscipit deleniti dignissimos doloremque fuga? Eaque dolores laudantium quo cupiditate necessitatibus excepturi quas debitis! Consequatur voluptatibus molestias rem veritatis.
                        Eum omnis, aperiam quibusdam facere vero quia iusto recusandae nobis a praesentium culpa non ratione inventore laboriosam, distinctio unde. Mollitia commodi similique asperiores, at in laudantium veniam inventore explicabo adipisci!
                        Iste incidunt laboriosam aperiam consectetur, repellendus neque. Accusantium illum odit culpa provident maxime aut ratione asperiores mollitia voluptatum fugit rem ducimus accusamus consequuntur, doloribus illo facilis nemo rerum nulla perspiciatis.
                        </p>
                    </div>
                </div>
                <div className = {styles.oddTeam}>
                    <div className={styles.teamImg}>
                        <img alt="team member photo"/>
                        <p><strong>Name of Member</strong></p>
                        <p><strong>Designation</strong></p>
                    </div>
                    <div className={styles.teamBout}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam omnis iusto? Reprehenderit possimus impedit nostrum perspiciatis sequi illo! Officiis beatae fuga aliquid et enim vel nostrum placeat quasi aspernatur?
                        Quasi autem libero iure omnis repellendus. Mollitia laborum amet suscipit, quia aspernatur quaerat perspiciatis eos cupiditate? Necessitatibus quasi quaerat, eum veniam, amet, quod error quos repellat odit ullam sequi illum?
                        Dicta, amet quidem? Soluta nemo necessitatibus aperiam blanditiis voluptate vero delectus nihil unde quibusdam eius voluptatibus iste impedit laboriosam, expedita facilis quae dolor, atque a maxime quia maiores cum? Eius.
                        Recusandae voluptate vel tempore tempora maiores dolore numquam voluptatibus, quos consectetur beatae veniam illum. Architecto aliquam nemo facilis odit error magni alias voluptates labore facere. Quod perspiciatis enim accusamus laboriosam.
                        Nostrum numquam consequatur, velit reprehenderit est atque sapiente, distinctio voluptatum impedit suscipit deleniti dignissimos doloremque fuga? Eaque dolores laudantium quo cupiditate necessitatibus excepturi quas debitis! Consequatur voluptatibus molestias rem veritatis.
                        Eum omnis, aperiam quibusdam facere vero quia iusto recusandae nobis a praesentium culpa non ratione inventore laboriosam, distinctio unde. Mollitia commodi similique asperiores, at in laudantium veniam inventore explicabo adipisci!
                        Iste incidunt laboriosam aperiam consectetur, repellendus neque. Accusantium illum odit culpa provident maxime aut ratione asperiores mollitia voluptatum fugit rem ducimus accusamus consequuntur, doloribus illo facilis nemo rerum nulla perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;