import React from 'react'
import ImageSlider from './ImageSlider'



function StealsOfTheSeason() {
  
    const images =[
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/running_Copy_2_9b60a74c6b.jpg",
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/winter_wear_4_Copy_d8edc03031.jpg",
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/sneakers_women_Copy_2_3497801530.jpg",
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/women_pants_Copy_de257f8e32.jpg",
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/LAST_SIZE_MEN_Copy_2_7c8ffef5c6.jpg",
    ];
  
    return (
    <>

    <div>

    <h2>
        STEALS OF THE SEASON
    </h2>

    <div>

    <ImageSlider images={images} />

    </div>

    </div>
    </>
)
}

export default StealsOfTheSeason