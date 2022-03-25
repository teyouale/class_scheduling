import React, { useRef, useEffect } from 'react';
import { Container, HomeSection, HomeLogo, HomeTitle, HomeSub, ScheduleGrid, ScheduleItem, ItemHeading, ItemInformation, ScheduleItemButton } from "./styles"
import logo from '../../assets/logo.png'
import Typed from 'typed.js'
import Corner from '../Controls/Corner'
export default function Home() {
    const typed = useRef(null);
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Course Scheduling Algorithm returns a schedule where the preferences for pro-fessors and courses are maximized, and the difference between the number of credits that may be assigned to a professor and the number of credits actually assigned to a professor is kept to a minimum.',
                'Class scheduling refers to the process of preparing a class schedule. Class schedule shows subject, time allotment, days, room utilization, instructor, and class adviser. Both instructor and student use it for reference as classes begin.'
            ],
            typeSpeed: 30,
            backSpeed: 40,
            loop: true
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }

    }, [])
    return (
        <React.Fragment>
            <Container>
                <HomeSection>
                    <HomeLogo src={logo} />
                    <HomeTitle> Scheduling Algorithm</HomeTitle>
                    <HomeSub>
                        <span ref={el} />
                    </HomeSub>
                    <ScheduleGrid>
                        <ScheduleItemButton>
                            <ScheduleItem to='/classscheduling' >


                                <ItemHeading>Class Scheduling Algorithm</ItemHeading>
                                <ItemInformation> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi aut harum est labore. Voluptates fuga amet sit sint quidem ipsum inventore sapiente dicta? Impedit commodi necessitatibus dolor doloribus voluptatem! </ItemInformation>

                            </ScheduleItem>
                        </ScheduleItemButton>
                        <ScheduleItemButton>
                            <ScheduleItem to='/Exam' >


                                <ItemHeading>Exam Scheduling Algorithm</ItemHeading>
                                <ItemInformation> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi aut harum est labore. Voluptates fuga amet sit sint quidem ipsum inventore sapiente dicta? Impedit commodi necessitatibus dolor doloribus voluptatem! </ItemInformation>

                            </ScheduleItem>
                        </ScheduleItemButton>

                        {/* <ScheduleItem>
                            <ItemHeading>Class Scheduling Algorithm</ItemHeading>
                            <ItemInformation> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi aut harum est labore. Voluptates fuga amet sit sint quidem ipsum inventore sapiente dicta? Impedit commodi necessitatibus dolor doloribus voluptatem! </ItemInformation>
                        </ScheduleItem>
                        <ScheduleItem>
                            <ItemHeading>Class Scheduling Algorithm</ItemHeading>
                            <ItemInformation> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi aut harum est labore. Voluptates fuga amet sit sint quidem ipsum inventore sapiente dicta? Impedit commodi necessitatibus dolor doloribus voluptatem! </ItemInformation>
                        </ScheduleItem> */}
                    </ScheduleGrid>
                </HomeSection>

            </Container>
        </React.Fragment>
    );
}
