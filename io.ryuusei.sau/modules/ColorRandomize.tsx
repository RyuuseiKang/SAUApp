export const colorRandomize = () => {
    var list = ['#FF6663', '#AE98CA', '#817B7B', '#595F9B', '#A2C764', '#36ABB5', 'DD96AB',
                '#FF0D66', '#E8CF2A', '#FFA22E', '#02E871'];
    var value = Math.floor(Math.random() * list.length);
    return list[value];
}