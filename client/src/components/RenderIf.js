export default function RenderIf(condition, content1, content2) {
    if (condition) {
        return content1;
    } else {
        return content2;
    }
}
