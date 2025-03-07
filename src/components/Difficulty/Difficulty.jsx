import { DifficultyList, DifficultyContainer, DifficultyTitle, DifficultyListItem} from "./Difficulty.styled"

export function Difficulty({difficulty}){
    return <DifficultyContainer>
        <DifficultyTitle>Difficulty</DifficultyTitle>
        <DifficultyList>
            <DifficultyListItem activeDiff={difficulty===0}>
                <p>Easy</p>
            </DifficultyListItem>
            <DifficultyListItem activeDiff={difficulty===1}>
                <p>Medium</p>
            </DifficultyListItem>
            <DifficultyListItem activeDiff={difficulty===2}>
                <p>Hard</p>
            </DifficultyListItem>
        </DifficultyList>
    </DifficultyContainer>
}