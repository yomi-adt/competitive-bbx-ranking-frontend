import { Tabs, Tab } from "react-bootstrap"
import StartTournamentTab from "../components/organizer/hostTourney/HostTournamentTab"

function Organizer() {
    return (
        <>
        <h1>Organizer</h1>
        <Tabs
            defaultActiveKey="hostTournament"
        >
            <Tab eventKey="hostTournament" title="Host A Ranked Tournament">
                <StartTournamentTab></StartTournamentTab>
            </Tab>
            <Tab eventKey="managePlayers" title="Manage Players">
                <StartTournamentTab></StartTournamentTab>
            </Tab>
            <Tab eventKey="manageParts" title="Manage Beyblade Parts">
                <StartTournamentTab></StartTournamentTab>
            </Tab>
        </Tabs>
        </>
    )
}

export default Organizer