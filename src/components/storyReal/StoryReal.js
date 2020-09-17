import React from 'react'
import './StoryReel.css';
import Story from '../Story/Story';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://avatars3.githubusercontent.com/u/49085627?s=460&u=e3d556d4df898e34dfe35d50565b05f0f8bf0bb8&v=4"
            profileSrc="https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256"
            title="mostafa" />

            <Story image="https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/23472909_710168979185580_6796798161819543901_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=NOGYKqXIv7UAX-yxtze&_nc_ht=scontent.fcai20-1.fna&oh=1e11a565a70ba6a321f9a577a2c94fb9&oe=5F88694D"
            profileSrc="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
            title="runners" />

            <Story image="https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/118148168_3140325409418388_4372717651446838749_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=XvRuZc1yHS4AX-P23pS&_nc_ht=scontent.fcai20-1.fna&oh=71d8452f1176fa6b9f6644a24fedd26d&oe=5F894F9C"
            profileSrc="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
            title="Bearded Guy" />


            <Story image="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD40000672/06ab3bfbe840e1638120765ac10a54ba9d1_thumb.jpg"
            profileSrc="https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256"
            title="model" />
        </div>
    )
}

export default StoryReel
