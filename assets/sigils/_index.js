const sigilis = {
    Abjuration : require('./Abjuration.png'),
    Conjuration:  require('./Conjuration.png'),
    Divination : require('./Divination.png'),
    Enchantment:  require('./Enchantment.png'),
    Evocation: require('./Evocation.png'),
    Illusion :require('./Illusion.png'),
    Necromancy: require('./Necromancy.png'),
    Transmutation: require('./Transmutation.png'),
}
export default function getSigil(sigilname) {
    switch (sigilname) {
        case("Abjuration"):
            return sigilis.Abjuration;
        case("Conjuration"):
            return sigilis.Conjuration;
        case("Divination"):
            return sigilis.Divination;
        case("Enchantment"):
            return sigilis.Enchantment;
        case("Evocation"):
            return sigilis.Evocation;
        case("Transmutation"):
            return sigilis.Transmutation;
        case("Necromancy"):
            return sigilis.Necromancy;
        default:
            return null;
    }
}