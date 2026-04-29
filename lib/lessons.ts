// All 30 lesson content
// Returns HTML body for each module

export function getLessonContent(
  moduleId: string
): string {
  const handler = LESSON_HANDLERS[moduleId];
  if (handler) {
    return handler();
  }
  return placeholderLesson(moduleId);
}

// ── LEVEL 101 FOUNDATION ───────────────────────

function lesson_101_1(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 101 · MODULE 1
    </p>
    <h1>The DLA Ecosystem</h1>
    <p class="lesson-intro">
        The Defense Logistics Agency is the
        largest logistics organization in
        the world and the primary source of
        opportunity for small business
        contractors selling physical supplies
        to the federal government. This
        lesson teaches you exactly what DLA
        is, what it buys, and why it is
        your starting point.
    </p>
</div>

<h2>What DLA Actually Does</h2>
<p>
    The Defense Logistics Agency supplies
    nearly every consumable item the
    United States military needs to
    operate. Food, fuel, medical supplies,
    repair parts, construction materials,
    clothing, and uniform items all flow
    through DLA. When a soldier in the
    field needs a replacement bolt for a
    Humvee, when a Navy ship needs a new
    pump gasket, when an Air Force base
    needs printer paper, DLA buys it.
</p>

<p>
    DLA spends approximately
    <strong class="dollar-amount">
        $42 billion
    </strong>
    annually on goods and services. About
    <strong class="dollar-amount">
        $20 billion
    </strong>
    of that flows through DIBBS — the
    Defense Internet Bid Board System —
    which is where small business
    contractors like you compete for
    individual purchase orders.
</p>

<div class="callout info">
    <p class="callout-title">
        Why DLA Is the Best Entry Point
    </p>
    <p class="callout-text">
        DLA runs the highest volume of
        small dollar individual awards
        of any federal agency. Most
        DIBBS purchases fall under the
        Simplified Acquisition Threshold
        of $250,000, which means less
        paperwork, faster awards, and
        real opportunity for small
        businesses to win repeatable
        contracts.
    </p>
</div>

<h2>The Six DLA Supply Centers</h2>

<p>
    DLA is organized into six primary
    supply centers, each specializing in
    different categories of items. When
    you see a solicitation on DIBBS, the
    first three letters tell you which
    center is buying.
</p>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Center</th>
                <th>Location</th>
                <th>What They Buy</th>
                <th>Sol # Prefix</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>
                    DLA Land and Maritime
                </strong></td>
                <td>Columbus, OH</td>
                <td>Ground vehicle parts,
                    ship parts, weapon
                    system components
                </td>
                <td>SPE7, SPM7, SPRMM</td>
            </tr>
            <tr>
                <td><strong>
                    DLA Aviation
                </strong></td>
                <td>Richmond, VA</td>
                <td>Aircraft parts, aviation
                    components, helicopter
                    parts
                </td>
                <td>SPE4, SPM4, SPRDL</td>
            </tr>
            <tr>
                <td><strong>
                    DLA Troop Support
                </strong></td>
                <td>Philadelphia, PA</td>
                <td>Clothing, textiles,
                    medical supplies, food,
                    construction materials
                </td>
                <td>SPE1, SPM1, SPE2, SPM2</td>
            </tr>
            <tr>
                <td><strong>
                    DLA Energy
                </strong></td>
                <td>Fort Belvoir, VA</td>
                <td>Fuel, petroleum products,
                    renewable energy
                </td>
                <td>SPE6, SPM6</td>
            </tr>
            <tr>
                <td><strong>
                    DLA Distribution
                </strong></td>
                <td>New Cumberland, PA</td>
                <td>Warehousing, packaging,
                    transportation services
                </td>
                <td>SP33</td>
            </tr>
            <tr>
                <td><strong>
                    DLA Disposition
                </strong></td>
                <td>Battle Creek, MI</td>
                <td>Disposal of excess
                    property, demilitarization
                </td>
                <td>SP45</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout success">
    <p class="callout-title">
        Most DIBBS Opportunity Is Here
    </p>
    <p class="callout-text">
        As a new contractor selling
        physical supplies, the three
        centers that will drive almost
        all your opportunity are DLA
        Land and Maritime, DLA Aviation,
        and DLA Troop Support.
    </p>
</div>

<h2>What Kinds of Items Does DLA Buy?</h2>

<p>
    DLA maintains roughly
    <strong>6 million</strong>
    distinct National Stock Numbers
    across its catalog. Every one of
    those NSNs represents an item DLA
    purchases on a recurring basis.
</p>

<div class="card">
    <h4>COMMON DLA PRODUCT CATEGORIES</h4>
    <ul>
        <li><strong>Hardware and Fasteners</strong>
            — screws, bolts, nuts, washers,
            rivets, pins, clips. High volume,
            low dollar per item, steady demand.
        </li>
        <li><strong>Electrical Components</strong>
            — connectors, switches, relays,
            circuit breakers, wire harnesses.
        </li>
        <li><strong>Mechanical Parts</strong>
            — bearings, seals, gaskets, valves,
            pumps, gears, shafts, hoses.
        </li>
        <li><strong>Tools and Test Equipment</strong>
            — hand tools, measuring instruments,
            specialized maintenance tools.
        </li>
        <li><strong>Uniforms and Textiles</strong>
            — boots, gloves, fabric goods,
            insignia, patches, personal gear.
        </li>
        <li><strong>Medical Supplies</strong>
            — bandages, IV bags, surgical
            instruments, first aid items.
        </li>
    </ul>
</div>

<h2>The Money Flow — How DLA Actually Buys</h2>

<p>
    When a DLA warehouse inventory drops
    below a reorder threshold, the system
    automatically generates a purchase
    request. That request becomes a
    solicitation posted on DIBBS with a
    specific NSN, quantity, delivery
    requirement, and packaging specification.
    You and other contractors submit
    quotes. The lowest technically
    acceptable quote wins.
</p>

<p>
    For items under the Simplified
    Acquisition Threshold of
    <strong class="dollar-amount">
        $250,000
    </strong>
    — which covers the vast majority of
    DIBBS solicitations — the process is
    streamlined. No lengthy proposals,
    no technical evaluations, no past
    performance scoring. Lowest price from
    a responsible vendor wins.
</p>

<div class="callout warning">
    <p class="callout-title">
        Lowest Price Does Not Mean
        Easy Money
    </p>
    <p class="callout-text">
        Winning at lowest price only
        works if you truly understand
        your costs. Shipping, packaging
        per MIL-STD-129, compliance
        overhead, and the risk of
        rejection all eat into margin.
    </p>
</div>

<h2>Key Players You Need to Know</h2>

<div class="card">
    <h3>Contracting Officer (CO)</h3>
    <p>
        The only person with legal authority
        to enter into, modify, or terminate
        a contract on behalf of the
        government. Everything a CO puts in
        writing is legally binding.
        Everything anyone else tells you
        verbally has no legal force. Always
        deal directly with the CO and always
        get commitments in writing.
    </p>
</div>

<div class="card">
    <h3>DCMA — Defense Contract Management
        Agency</h3>
    <p>
        The agency that physically inspects
        goods before shipment when a
        solicitation requires origin
        inspection. A DCMA quality assurance
        representative comes to your
        facility, inspects the items against
        the specification, and signs off
        before you can ship.
    </p>
</div>

<div class="card">
    <h3>The Depot</h3>
    <p>
        DLA operates dozens of warehouses
        called depots where items are
        received, stored, and eventually
        shipped to end users. When your
        solicitation says FOB Destination,
        these depots are where your items go.
    </p>
</div>

<div class="callout success">
    <p class="callout-title">
        Ready for Module 2
    </p>
    <p class="callout-text">
        The next module takes you inside
        DIBBS itself — how to navigate
        the platform, search
        effectively, and build your
        daily workflow.
    </p>
</div>
  `;
}

function lesson_101_2(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 101 · MODULE 2
    </p>
    <h1>DIBBS Platform Mastery</h1>
    <p class="lesson-intro">
        DIBBS is where the work happens.
        Every dollar you make as a DLA
        contractor flows through this
        single website. This lesson teaches
        you to navigate DIBBS like a
        professional.
    </p>
</div>

<h2>What DIBBS Actually Is</h2>

<p>
    DIBBS stands for Defense Internet Bid
    Board System. It lives at
    <strong>dibbs.bsm.dla.mil</strong>.
    Every DLA solicitation under the
    Simplified Acquisition Threshold gets
    posted here. If you want to sell
    physical supplies to DLA as a small
    business, DIBBS is where you work.
</p>

<div class="callout warning">
    <p class="callout-title">
        You Must Register Before Bidding
    </p>
    <p class="callout-text">
        You cannot submit quotes on
        DIBBS until you have completed
        SAM.gov registration and then
        created a DIBBS account linked
        to your CAGE code.
    </p>
</div>

<h2>The DIBBS Sections That Matter</h2>

<div class="card">
    <h3>1. RFQ / RFP Search</h3>
    <p>
        This is where you find open
        solicitations. You search by NSN,
        FSC code, nomenclature, or
        solicitation number. This is the
        primary tool you use every day.
    </p>
</div>

<div class="card">
    <h3>2. Award Search</h3>
    <p>
        This shows completed awards — who
        won, what price, what quantity.
        This is where you research
        procurement history to price your
        bids competitively.
    </p>
</div>

<div class="card">
    <h3>3. My Bids</h3>
    <p>
        Your active quotes. Every solicitation
        you have submitted a quote on appears
        here with its status. Check this
        daily to see when awards are made.
    </p>
</div>

<h2>Reading a Solicitation Number</h2>

<div class="sol-section">
    <div class="section-label">
        DECODING SPE7L3-25-T-1474
    </div>
    <div class="section-content">SPE  — DLA prime procurement prefix
7    — Supply center (7 = Land and Maritime)
L3   — Procurement office within the center
-25  — Fiscal year 2025
-T   — RFQ under Simplified Acquisition
-1474 — Sequential number for that office</div>
</div>

<div class="card-dark">
    <h4>COMMON DIBBS SOLICITATION PREFIXES</h4>
    <table>
        <thead>
            <tr>
                <th>Prefix</th>
                <th>Center</th>
                <th>What to Expect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>SPE7</strong></td>
                <td>Land and Maritime</td>
                <td>Vehicle parts, ship
                    parts, weapon components</td>
            </tr>
            <tr>
                <td><strong>SPE4</strong></td>
                <td>Aviation</td>
                <td>Aircraft and aviation
                    parts</td>
            </tr>
            <tr>
                <td><strong>SPE1</strong></td>
                <td>Troop Support Clothing</td>
                <td>Uniforms, textiles,
                    personal equipment</td>
            </tr>
            <tr>
                <td><strong>SPE2</strong></td>
                <td>Troop Support Medical</td>
                <td>Medical supplies,
                    pharmaceuticals</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>The Daily Workflow</h2>

<div class="card">
    <h4>RECOMMENDED DAILY DIBBS WORKFLOW</h4>
    <ol>
        <li><strong>Morning — Check saved
            searches.</strong> Review new
            solicitations posted overnight.
        </li>
        <li><strong>Morning — Review active
            bids.</strong> Check My Bids
            for amendments, awards, or
            cancellations.
        </li>
        <li><strong>Midday — Research and
            source.</strong> For promising
            solicitations, research the
            item, contact suppliers for
            quotes, and calculate price.
        </li>
        <li><strong>Afternoon — Submit
            quotes.</strong> Enter your
            prices on DIBBS for
            solicitations you have
            researched.
        </li>
    </ol>
</div>

<div class="callout info">
    <p class="callout-title">
        The Solicitation Stays Open
        Until Awarded
    </p>
    <p class="callout-text">
        DLA DIBBS solicitations typically
        stay open until the buyer either
        makes an award or cancels. You can
        submit a quote any time it shows
        as Open — even past the printed
        due date.
    </p>
</div>

<h2>Saved Searches — Your Automation</h2>

<p>
    The key to scaling on DIBBS is
    automation. Saved searches let DIBBS
    do the work for you. A well-configured
    set of saved searches filters the
    25,000+ new solicitations posted
    monthly down to the 20-50 per day
    that actually match your business.
</p>

<div class="card">
    <h4>HOW TO SET UP SAVED SEARCHES</h4>
    <ol>
        <li>Log in to DIBBS with your
            registered account</li>
        <li>Navigate to RFQ/RFP Search</li>
        <li>Enter your search criteria —
            FSC codes, NSN prefixes, or
            nomenclature keywords</li>
        <li>Run the search to verify the
            results look right</li>
        <li>Click Save Search and give it
            a descriptive name</li>
        <li>Set email notification
            preferences</li>
    </ol>
</div>

<h2>Common DIBBS Pitfalls</h2>

<div class="callout danger">
    <p class="callout-title">
        TOP MISTAKES NEW CONTRACTORS MAKE
    </p>
    <p class="callout-text">
        Searching too broadly, bidding
        without researching, ignoring
        amendments, missing award
        notifications, and trusting the
        printed due date alone. Always
        check DIBBS status, not the
        printed date.
    </p>
</div>

<div class="callout success">
    <p class="callout-title">
        Practice Makes Fluent
    </p>
    <p class="callout-text">
        DIBBS becomes second nature after
        you have navigated it daily for
        two weeks. Until then, every
        search feels clunky. Push through.
    </p>
</div>
  `;
}

function lesson_101_3(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 101 · MODULE 3
    </p>
    <h1>RFQ Solicitations on DIBBS</h1>
    <p class="lesson-intro">
        Almost everything you will bid on
        through DIBBS is an RFQ — a Request
        for Quotation. This lesson teaches
        you exactly how RFQs work on DIBBS
        and the critical quirks that
        trip up new contractors.
    </p>
</div>

<h2>What an RFQ Actually Is</h2>

<p>
    An RFQ is the government asking
    "what price will you sell this
    specific item for, and when can you
    deliver?" It is a simple request with
    a simple answer. No proposal, no
    technical narrative, no past
    performance scoring. You quote a
    price and a delivery date. The lowest
    responsible responsive bidder wins.
</p>

<div class="callout info">
    <p class="callout-title">
        Why RFQs Dominate DIBBS
    </p>
    <p class="callout-text">
        DLA buys items on such a high
        volume that a formal competitive
        proposal process for every
        bracket, bolt, and bearing
        would paralyze the supply
        chain. RFQs let DLA move
        quickly.
    </p>
</div>

<h2>How DIBBS RFQs Differ From Commercial</h2>

<div class="card">
    <h3>The Printed Due Date Is Soft</h3>
    <p>
        Commercial RFQs close at the
        printed deadline. DIBBS RFQs
        often stay open past their
        printed date and remain accepting
        quotes until the buyer either
        makes an award or formally cancels
        the solicitation. You check the
        status in DIBBS itself, not the
        printed date.
    </p>
</div>

<div class="card">
    <h3>No Back-and-Forth Negotiation</h3>
    <p>
        DIBBS RFQs are submit-and-wait.
        You submit your price once. You
        can update it if the solicitation
        is still open, but there is no
        dialogue with the contracting
        officer before award.
    </p>
</div>

<div class="card">
    <h3>Lowest Price Wins — But
        Responsibility Matters</h3>
    <p>
        A contractor with a history of
        late deliveries or rejected
        products can be deemed
        nonresponsible and passed over
        even with the lowest price.
    </p>
</div>

<h2>The Anatomy of a DIBBS RFQ</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Section</th>
                <th>Contains</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>A</strong></td>
                <td>Cover page, solicitation
                    number, due date</td>
            </tr>
            <tr>
                <td><strong>B</strong></td>
                <td>CLIN, NSN, quantity, unit
                    of issue, your price</td>
            </tr>
            <tr>
                <td><strong>C</strong></td>
                <td>Technical specifications,
                    drawings, QPL</td>
            </tr>
            <tr>
                <td><strong>D</strong></td>
                <td>Packaging and marking
                    requirements</td>
            </tr>
            <tr>
                <td><strong>E</strong></td>
                <td>Inspection and acceptance</td>
            </tr>
            <tr>
                <td><strong>F</strong></td>
                <td>Delivery schedule, FOB
                    point</td>
            </tr>
            <tr>
                <td><strong>G</strong></td>
                <td>Contract administration,
                    WAWF payment</td>
            </tr>
            <tr>
                <td><strong>H</strong></td>
                <td>Special contract
                    requirements</td>
            </tr>
            <tr>
                <td><strong>I</strong></td>
                <td>FAR and DFARS clauses</td>
            </tr>
            <tr>
                <td><strong>J</strong></td>
                <td>Attachments, drawings,
                    QPL</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Amendments — Why They Matter</h2>

<p>
    After an RFQ is posted, the
    contracting officer can issue
    amendments that change the
    solicitation. Amendments are
    numbered sequentially. Each
    amendment modifies specific parts
    of the solicitation.
</p>

<div class="card">
    <ul>
        <li><strong>Quantity changes</strong></li>
        <li><strong>Delivery date extensions</strong></li>
        <li><strong>Specification updates</strong></li>
        <li><strong>Due date extensions</strong></li>
        <li><strong>Set-aside changes</strong></li>
        <li><strong>Cancellation</strong></li>
    </ul>
</div>

<div class="callout warning">
    <p class="callout-title">
        Always Check for Amendments
    </p>
    <p class="callout-text">
        Before submitting a quote,
        verify you are working from
        the latest version. An amendment
        that doubles the quantity changes
        your pricing math.
    </p>
</div>

<h2>Set-Asides — Who Can Bid</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Set-Aside</th>
                <th>Meaning</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Unrestricted</strong></td>
                <td>Any business can bid</td>
            </tr>
            <tr>
                <td><strong>SB</strong></td>
                <td>Total Small Business
                    Set-Aside</td>
            </tr>
            <tr>
                <td><strong>WOSB</strong></td>
                <td>Women-Owned Small
                    Business</td>
            </tr>
            <tr>
                <td><strong>SDVOSB</strong></td>
                <td>Service-Disabled
                    Veteran-Owned SB</td>
            </tr>
            <tr>
                <td><strong>HUBZone</strong></td>
                <td>Historically
                    Underutilized Zone</td>
            </tr>
            <tr>
                <td><strong>8(a)</strong></td>
                <td>Small Disadvantaged
                    Business Program</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Required Registrations Before Bidding</h2>

<div class="card">
    <h4>REGISTRATION SEQUENCE</h4>
    <ol>
        <li><strong>Obtain a UEI</strong>
            from SAM.gov.</li>
        <li><strong>Register in SAM.gov</strong>
            with full vendor profile.</li>
        <li><strong>Obtain a CAGE code</strong>
            automatically from SAM.</li>
        <li><strong>Register in DIBBS</strong>
            using your CAGE code.</li>
        <li><strong>Register in WAWF</strong>
            for invoicing.</li>
    </ol>
</div>

<div class="callout info">
    <p class="callout-title">
        Next — FSC Codes
    </p>
    <p class="callout-text">
        The next module covers FSC codes —
        the most powerful tool for finding
        DIBBS opportunities matching
        your business.
    </p>
</div>
  `;
}

function lesson_101_4(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 101 · MODULE 4
    </p>
    <h1>Understanding FSC Codes</h1>
    <p class="lesson-intro">
        FSC codes are the single most
        powerful tool for finding DIBBS
        opportunities that match your
        business. Master FSC codes and
        you will find profitable
        opportunities that competitors
        miss.
    </p>
</div>

<h2>What an FSC Code Is</h2>

<p>
    FSC stands for Federal Supply
    Classification. It is a four-digit
    code that categorizes every physical
    item the federal government buys.
    The FSC system has about 600 active
    four-digit codes organized under 78
    two-digit groups.
</p>

<p>
    Every NSN begins with an FSC code.
    When you see NSN 5305-00-123-4567,
    the 5305 is the FSC code — in this
    case, Screws. The rest of the NSN
    identifies the specific screw.
</p>

<div class="callout success">
    <p class="callout-title">
        FSC Codes Are Your Market
    </p>
    <p class="callout-text">
        Your business lives or dies by
        choosing the right FSC codes.
        Too few and you miss opportunities.
        Too many and you drown in
        irrelevant solicitations.
    </p>
</div>

<h2>How an FSC Code Is Structured</h2>

<div class="sol-section">
    <div class="section-label">
        FSC CODE 5305 DECODED
    </div>
    <div class="section-content">5305 — Screws

53     — Hardware and Abrasives (Group)
   05  — Screws (Class within Group 53)

Related codes in Group 53:
   5305 — Screws
   5306 — Bolts
   5307 — Studs
   5310 — Nuts and Washers
   5315 — Nails, Keys, and Pins
   5320 — Rivets</div>
</div>

<p>
    Contractors who sell threaded
    fasteners typically set up searches
    for all the codes in Group 53
    because their supplier base and
    technical expertise cover all of
    them.
</p>

<h2>The Major FSC Groups</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Group</th>
                <th>Category</th>
                <th>Example Classes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>15</strong></td>
                <td>Aircraft and Airframe</td>
                <td>1510, 1520, 1560</td>
            </tr>
            <tr>
                <td><strong>23</strong></td>
                <td>Motor Vehicles</td>
                <td>2320 Trucks, 2330 Trailers</td>
            </tr>
            <tr>
                <td><strong>28</strong></td>
                <td>Engines, Turbines</td>
                <td>2815 Diesel, 2835 Gas Turbine</td>
            </tr>
            <tr>
                <td><strong>31</strong></td>
                <td>Bearings</td>
                <td>3110 Antifriction, 3120 Plain</td>
            </tr>
            <tr>
                <td><strong>40</strong></td>
                <td>Rope, Cable, Chain</td>
                <td>4010, 4020, 4030</td>
            </tr>
            <tr>
                <td><strong>43</strong></td>
                <td>Pumps and Compressors</td>
                <td>4310, 4320, 4330</td>
            </tr>
            <tr>
                <td><strong>47</strong></td>
                <td>Pipe, Tubing, Hose</td>
                <td>4710, 4720, 4730</td>
            </tr>
            <tr>
                <td><strong>48</strong></td>
                <td>Valves</td>
                <td>4810, 4820</td>
            </tr>
            <tr>
                <td><strong>51</strong></td>
                <td>Hand Tools</td>
                <td>5110, 5120, 5130</td>
            </tr>
            <tr>
                <td><strong>53</strong></td>
                <td>Hardware and Abrasives</td>
                <td>5305-5350 Screws, bolts,
                    fasteners</td>
            </tr>
            <tr>
                <td><strong>59</strong></td>
                <td>Electronic Components</td>
                <td>5905 Resistors, 5935
                    Connectors, 5945 Relays</td>
            </tr>
            <tr>
                <td><strong>61</strong></td>
                <td>Electrical Wire, Power</td>
                <td>6105 Motors, 6145 Cables</td>
            </tr>
            <tr>
                <td><strong>84</strong></td>
                <td>Clothing, Equipment</td>
                <td>8415 Clothing, 8430 Footwear</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>How to Find Your FSC Codes</h2>

<div class="card">
    <h4>FIVE-STEP FSC SELECTION PROCESS</h4>
    <ol>
        <li><strong>List your products or
            capabilities.</strong></li>
        <li><strong>Map each capability to
            FSC codes.</strong></li>
        <li><strong>Group related codes
            together.</strong></li>
        <li><strong>Verify historical award
            volume.</strong></li>
        <li><strong>Set up saved searches.</strong></li>
    </ol>
</div>

<h2>Focused vs Broad Strategy</h2>

<div class="card">
    <h3>Focused Strategy</h3>
    <p>
        Track 3-5 FSC codes that match
        one tight product specialty.
        You see fewer solicitations but
        you are the expert on those
        items. Your sourcing is efficient,
        your pricing is sharp.
    </p>
</div>

<div class="card">
    <h3>Broad Strategy</h3>
    <p>
        Track 15-30 FSC codes across
        multiple related categories.
        Higher volume of opportunities
        means you can be selective.
        Works well for general
        distributors.
    </p>
</div>

<div class="callout warning">
    <p class="callout-title">
        Do Not Track FSC Codes You
        Cannot Deliver
    </p>
    <p class="callout-text">
        The temptation is to track many
        FSC codes in case something
        interesting appears. This creates
        overwhelm. Only track codes where
        you have real capability.
    </p>
</div>

<h2>FSC Codes That Should Scare You</h2>

<div class="callout danger">
    <p class="callout-title">
        RESTRICTED FSC CATEGORIES
    </p>
    <p class="callout-text">
        Group 10 (Weapons) requires ITAR
        compliance and firearms licensing.
        Group 13 (Ammunition) requires ATF.
        FSC 6505 (Drugs) requires FDA and
        DEA. Avoid these unless you have
        the licenses.
    </p>
</div>

<div class="callout success">
    <p class="callout-title">
        Your FSC Codes Are Your
        Competitive Edge
    </p>
    <p class="callout-text">
        Every successful DLA contractor
        has a curated list of FSC codes
        that perfectly matches their
        capabilities. Take time to build
        yours thoughtfully.
    </p>
</div>
  `;
}

function lesson_101_cap(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 101 · CAPSTONE
    </p>
    <h1>Capstone — Analyze Your First
        DIBBS Solicitation</h1>
    <p class="lesson-intro">
        You have completed the Foundation
        curriculum. Now it is time to apply
        everything to a real solicitation.
    </p>
</div>

<h2>What You Are About to Do</h2>

<p>
    You will upload a real DLA DIBBS
    solicitation PDF. The AI will
    analyze every section of the
    document and create an interactive
    teaching lesson specific to that
    solicitation.
</p>

<div class="callout info">
    <p class="callout-title">
        How to Get a Solicitation PDF
    </p>
    <p class="callout-text">
        Go to dibbs.bsm.dla.mil and
        search for any open solicitation
        matching one of your FSC codes.
        Click the solicitation number
        and download the PDF.
    </p>
</div>

<h2>What You Should Be Able to Answer</h2>

<div class="card-accent">
    <ul>
        <li>Which DLA supply center issued this?</li>
        <li>What is the FSC code?</li>
        <li>What is the NSN and nomenclature?</li>
        <li>What quantity and unit of issue?</li>
        <li>Is this FOB Destination or Origin?</li>
        <li>Is inspection at origin or destination?</li>
        <li>What is the delivery timeline?</li>
        <li>What set-aside applies?</li>
        <li>What did DLA pay for this NSN in the past?</li>
        <li>Would you bid on this and why?</li>
    </ul>
</div>

<div class="callout success">
    <p class="callout-title">
        Unlock Upload
    </p>
    <p class="callout-text">
        Mark this capstone complete to
        unlock the Upload Solicitation
        button in the sidebar. You will
        be able to analyze any DIBBS
        solicitation from any lesson.
    </p>
</div>

<h2>After Your Capstone</h2>

<p>
    Completing this capstone unlocks
    the Upload Solicitation button in
    the sidebar permanently. Level 201
    dives into each section of a
    solicitation in depth.
</p>
  `;
}

// ── LEVEL 201 NAVIGATION ──────────────────────

function lesson_201_1(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 1
    </p>
    <h1>Section A — Solicitation and
        Contract Form</h1>
    <p class="lesson-intro">
        Section A is the cover page of
        every DIBBS solicitation. It
        identifies the purchase, sets
        timing expectations, and tells
        you who the buyer is. Reading
        Section A correctly prevents the
        most common new-contractor
        mistakes.
    </p>
</div>

<h2>What Section A Contains</h2>

<p>
    Section A is usually one to three
    pages at the front of the
    solicitation document. It uses
    Standard Form 1449 (SF 1449) for
    Commercial Items or similar
    simplified forms. This is the
    identification and contact page.
</p>

<div class="card-dark">
    <h4>SECTION A TYPICALLY INCLUDES</h4>
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>What It Tells You</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Solicitation
                    Number</strong></td>
                <td>Unique identifier
                    for this specific
                    purchase
                </td>
            </tr>
            <tr>
                <td><strong>Offer Due
                    Date and Time</strong></td>
                <td>Printed deadline for
                    submitting quotes
                </td>
            </tr>
            <tr>
                <td><strong>Type of
                    Solicitation</strong></td>
                <td>RFQ for almost all
                    DIBBS under $250K</td>
            </tr>
            <tr>
                <td><strong>Issued By</strong></td>
                <td>Which DLA supply
                    center
                </td>
            </tr>
            <tr>
                <td><strong>Buyer Name
                    and Contact</strong></td>
                <td>The specific
                    contracting officer
                </td>
            </tr>
            <tr>
                <td><strong>Set-Aside
                    Status</strong></td>
                <td>Unrestricted, SB,
                    WOSB, SDVOSB,
                    HUBZone, or 8(a)</td>
            </tr>
            <tr>
                <td><strong>NAICS Code</strong></td>
                <td>Industry code for
                    size standard
                </td>
            </tr>
            <tr>
                <td><strong>Amendment
                    Number</strong></td>
                <td>If amended, which
                    amendment
                </td>
            </tr>
        </tbody>
    </table>
</div>

<h2>The Due Date — DIBBS Specific</h2>

<p>
    Section A shows a printed due date.
    On commercial solicitations this
    deadline is hard. On DIBBS it
    typically is not.
</p>

<p>
    DIBBS RFQs most often remain open
    accepting quotes until the
    contracting officer either makes
    an award or formally cancels the
    solicitation. A solicitation
    showing a due date three months
    in the past can still be Open in
    DIBBS.
</p>

<div class="card">
    <h4>HOW TO VERIFY ACTUAL STATUS</h4>
    <ol>
        <li>Note the solicitation number
            from Section A</li>
        <li>Log in to DIBBS</li>
        <li>Search for that solicitation
            number</li>
        <li>Check the Status column —
            Open means you can submit</li>
    </ol>
</div>

<div class="callout warning">
    <p class="callout-title">
        Never Dismiss Based on Printed Date
    </p>
    <p class="callout-text">
        New contractors often filter out
        solicitations with past dates
        without checking DIBBS status.
        Always check actual DIBBS status.
    </p>
</div>

<h2>Set-Aside on the Cover Page</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Set-Aside</th>
                <th>What It Means</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Unrestricted</strong></td>
                <td>Any business can bid</td>
            </tr>
            <tr>
                <td><strong>100% SB</strong></td>
                <td>Must qualify under
                    SBA size standard</td>
            </tr>
            <tr>
                <td><strong>WOSB</strong></td>
                <td>Women-Owned SB
                    certified</td>
            </tr>
            <tr>
                <td><strong>SDVOSB</strong></td>
                <td>Service-Disabled
                    Veteran-Owned SB</td>
            </tr>
            <tr>
                <td><strong>HUBZone</strong></td>
                <td>SBA HUBZone
                    certified</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Your Section A Action Items</h2>

<div class="card-accent">
    <h4>EVERY TIME YOU READ A SECTION A</h4>
    <ol>
        <li>Note the solicitation number
            and verify it is Open in DIBBS</li>
        <li>Decode the prefix to know
            which supply center</li>
        <li>Check the amendment number</li>
        <li>Verify the set-aside matches
            your certifications</li>
        <li>Confirm NAICS and your size
            status</li>
        <li>Save CO contact info</li>
    </ol>
</div>

<div class="callout info">
    <p class="callout-title">
        Next — Section B
    </p>
    <p class="callout-text">
        Module 2 dives into Section B,
        where the actual item being
        purchased is specified.
    </p>
</div>
  `;
}

function lesson_201_2(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 2
    </p>
    <h1>Section B — Supplies and
        Services and Prices</h1>
    <p class="lesson-intro">
        Section B is where you find out
        exactly what the government is
        buying and where you enter your
        price. Every number on your
        invoice eventually traces back
        to a CLIN in this section.
    </p>
</div>

<h2>What Section B Contains</h2>

<div class="card-dark">
    <h4>SECTION B FIELDS</h4>
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>What It Contains</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>CLIN</strong></td>
                <td>Contract Line Item
                    Number</td>
            </tr>
            <tr>
                <td><strong>NSN</strong></td>
                <td>National Stock
                    Number — 13-digit ID</td>
            </tr>
            <tr>
                <td><strong>Part Number</strong></td>
                <td>Manufacturer's part
                    number</td>
            </tr>
            <tr>
                <td><strong>CAGE Code</strong></td>
                <td>Approved manufacturer
                    if source-controlled</td>
            </tr>
            <tr>
                <td><strong>Quantity</strong></td>
                <td>Number of units
                    required</td>
            </tr>
            <tr>
                <td><strong>Unit of
                    Issue</strong></td>
                <td>How the item is
                    counted</td>
            </tr>
            <tr>
                <td><strong>Delivery
                    Days</strong></td>
                <td>Required delivery
                    timeframe</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Decoding the NSN</h2>

<div class="sol-section">
    <div class="section-label">
        NSN 5305-00-123-4567 DECODED
    </div>
    <div class="section-content">5305 — FSC code (first 4 digits)
       Tells you the category
       5305 = Screws

00   — National Codification Bureau
       00 and 01 = United States

123-4567 — National Item
       Identification Number (NIIN)
       Unique within the FSC</div>
</div>

<h2>Unit of Issue — The Critical Field</h2>

<p>
    The unit of issue tells you how
    DLA counts the item. This sounds
    trivial but getting it wrong
    destroys profit margins. If the
    unit of issue is BX (box) and the
    quantity is 50, you are bidding
    on 50 boxes, not 50 individual
    items.
</p>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Meaning</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>EA</strong></td>
                <td>Each — most common</td>
            </tr>
            <tr>
                <td><strong>PR</strong></td>
                <td>Pair — gloves, boots</td>
            </tr>
            <tr>
                <td><strong>DZ</strong></td>
                <td>Dozen — 12 per UOI</td>
            </tr>
            <tr>
                <td><strong>BX</strong></td>
                <td>Box — check count</td>
            </tr>
            <tr>
                <td><strong>CA</strong></td>
                <td>Case — varies widely</td>
            </tr>
            <tr>
                <td><strong>HD</strong></td>
                <td>Hundred — 100 per UOI</td>
            </tr>
            <tr>
                <td><strong>FT</strong></td>
                <td>Foot — linear measure</td>
            </tr>
            <tr>
                <td><strong>LB</strong></td>
                <td>Pound — weight-based</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout danger">
    <p class="callout-title">
        The Box Trap
    </p>
    <p class="callout-text">
        New contractors see "QTY 50, UOI
        BX" and assume they need 50 items.
        They price per piece and win at
        a rate 1/100th of the actual cost.
        Always verify pieces per UOI
        before bidding.
    </p>
</div>

<h2>The Part Number and CAGE Code</h2>

<div class="card">
    <h3>Source-Controlled Items</h3>
    <p>
        If Section B lists a part number
        and CAGE code, you must deliver
        that exact part from that specific
        manufacturer. Verify you can
        source the exact part before
        bidding.
    </p>
</div>

<h2>Delivery Days — ADO and ARO</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Term</th>
                <th>Clock Starts</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>ADO</strong></td>
                <td>Day DLA issues PO</td>
            </tr>
            <tr>
                <td><strong>ARO</strong></td>
                <td>Day you receive PO</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout warning">
    <p class="callout-title">
        Delivery Days Include Everything
    </p>
    <p class="callout-text">
        The delivery window must cover
        your sourcing time, packaging
        time, shipping time, and any
        inspection time.
    </p>
</div>

<h2>Your Section B Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Decode the NSN — what FSC
            category?</li>
        <li>Verify unit of issue and
            pieces per UOI</li>
        <li>Check if source-controlled</li>
        <li>Calculate realistic delivery
            timeline</li>
        <li>Source item and confirm
            pricing</li>
        <li>Double-check decimal
            placement on unit price</li>
    </ol>
</div>
  `;
}

function lesson_201_3(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 3
    </p>
    <h1>Section C — Description and
        Specifications</h1>
    <p class="lesson-intro">
        Section C defines exactly what
        the item must be. Materials,
        dimensions, performance,
        testing, and approved sources
        all live here.
    </p>
</div>

<h2>What Section C Contains</h2>

<div class="card-dark">
    <h4>SECTION C TYPICAL CONTENTS</h4>
    <ul>
        <li><strong>Referenced
            Specifications</strong> —
            MIL-SPEC, CID, or ASTM</li>
        <li><strong>Technical
            Drawings</strong> —
            drawing numbers with
            revision levels</li>
        <li><strong>Salient
            Characteristics</strong> —
            key features the item
            must have</li>
        <li><strong>QPL Reference</strong>
            — Qualified Products List</li>
        <li><strong>Approved Source
            List</strong> — CAGE codes
            of manufacturers</li>
        <li><strong>Country of Origin
            Requirements</strong></li>
        <li><strong>Testing
            Requirements</strong> —
            First Article, acceptance
            tests</li>
    </ul>
</div>

<h2>Types of Specifications</h2>

<div class="card">
    <h3>Military Specifications (MIL-SPEC)</h3>
    <p>
        Very precise requirements
        developed by the military.
        Format numbers like MIL-DTL-32333
        or MIL-PRF-29601. The letters
        after MIL tell you the type:
        DTL for detail, PRF for
        performance, STD for standard.
    </p>
</div>

<div class="card">
    <h3>Commercial Item Descriptions (CID)</h3>
    <p>
        A-A-prefixed specifications
        that describe commercial items
        adapted for military use. Less
        strict than MIL-SPECs.
    </p>
</div>

<div class="card">
    <h3>Industry Standards</h3>
    <p>
        ASTM International, SAE
        International, ANSI, IEEE, and
        IPC standards are widely
        referenced. These are
        commercial standards developed
        by industry.
    </p>
</div>

<h2>The QPL — Qualified Products List</h2>

<p>
    Some items require products from
    a QPL. A QPL is a list of
    manufacturers and specific part
    numbers that have been pre-
    qualified to meet the
    specification. Only QPL items
    are acceptable.
</p>

<div class="callout warning">
    <p class="callout-title">
        QPL Requirements Restrict Your
        Sourcing
    </p>
    <p class="callout-text">
        If Section C references a QPL,
        you cannot substitute equivalent
        products from non-qualified
        manufacturers. Before bidding,
        confirm you can source from a
        QPL-listed manufacturer.
    </p>
</div>

<h2>Country of Origin Requirements</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Requirement</th>
                <th>Meaning</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Trade Agreements
                    Act</strong></td>
                <td>Items from TAA-
                    compliant countries
                    only. Excludes China.</td>
            </tr>
            <tr>
                <td><strong>Buy American
                    Act</strong></td>
                <td>US-made preference</td>
            </tr>
            <tr>
                <td><strong>Berry
                    Amendment</strong></td>
                <td>100% US origin for
                    textiles, clothing,
                    food</td>
            </tr>
            <tr>
                <td><strong>Domestic Only</strong></td>
                <td>US manufacture required</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout danger">
    <p class="callout-title">
        Country of Origin Fraud Is Federal
        Crime
    </p>
    <p class="callout-text">
        Misrepresenting country of origin
        to win a contract with TAA or
        Berry requirements is federal
        fraud. Always verify actual
        country of manufacture with
        your supplier in writing.
    </p>
</div>

<h2>First Article Testing</h2>

<p>
    Some Section C requirements include
    First Article Testing (FAT). You
    must produce a sample item, submit
    it for testing, and receive approval
    before producing the full quantity.
</p>

<div class="card">
    <h4>WHEN YOU SEE FAT IN SECTION C</h4>
    <ul>
        <li>Plan for 2-8 weeks added to
            delivery timeline</li>
        <li>Budget for prototype cost</li>
        <li>Confirm supplier can produce
            testable sample</li>
        <li>Understand what tests will
            be performed</li>
    </ul>
</div>

<h2>Your Section C Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Identify the primary
            specification or drawing</li>
        <li>Check for QPL or approved
            source restrictions</li>
        <li>Note country of origin
            requirements</li>
        <li>Check for First Article
            Testing</li>
        <li>Identify required
            certificates</li>
        <li>Confirm your source can
            meet the spec before
            bidding</li>
    </ol>
</div>
  `;
}

function lesson_201_4(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 4
    </p>
    <h1>Section D — Packaging and
        Marking</h1>
    <p class="lesson-intro">
        Section D is where contractors
        lose the most money on DLA
        contracts. Packaging can add 15
        to 25 percent to your cost
        basis and rejection for
        non-conforming packaging is
        the most common reason a
        shipment comes back.
    </p>
</div>

<h2>What Section D Contains</h2>

<div class="card-dark">
    <h4>SECTION D TYPICAL CONTENTS</h4>
    <table>
        <thead>
            <tr>
                <th>Element</th>
                <th>What It Specifies</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Preservation
                    Material</strong></td>
                <td>What preservative
                    protects the item</td>
            </tr>
            <tr>
                <td><strong>Cushioning</strong></td>
                <td>Material inside
                    container</td>
            </tr>
            <tr>
                <td><strong>Unit
                    Container</strong></td>
                <td>Immediate container</td>
            </tr>
            <tr>
                <td><strong>Pack Code</strong></td>
                <td>How units are
                    consolidated</td>
            </tr>
            <tr>
                <td><strong>Marking
                    Code</strong></td>
                <td>Required markings
                    per MIL-STD-129</td>
            </tr>
            <tr>
                <td><strong>Method of
                    Preservation</strong></td>
                <td>Overall preservation
                    approach</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>MIL-STD-2073-1 — The Standard</h2>

<p>
    MIL-STD-2073-1 is the master
    packaging standard for the
    military. It defines what
    preservation methods to use,
    what materials qualify, and
    what codes represent each
    requirement.
</p>

<h2>Common Preservation Methods</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Approach</th>
                <th>Cost Impact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Method 10</strong></td>
                <td>Physical protection</td>
                <td>Low</td>
            </tr>
            <tr>
                <td><strong>Method 20</strong></td>
                <td>Preservative coating</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td><strong>Method 31</strong></td>
                <td>Watervaporproof bag</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td><strong>Method 40</strong></td>
                <td>WVP bag with
                    desiccant</td>
                <td>Medium-High</td>
            </tr>
            <tr>
                <td><strong>Method 41</strong></td>
                <td>Heat-sealed WVP +
                    desiccant</td>
                <td>High</td>
            </tr>
            <tr>
                <td><strong>Method 51</strong></td>
                <td>Sealed rigid +
                    desiccant</td>
                <td>High</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout warning">
    <p class="callout-title">
        Method 40/41/51 Adds Real Cost
    </p>
    <p class="callout-text">
        Watervaporproof packaging with
        desiccant can add $1.50 to
        $4.00 per unit in materials and
        labor. On a 500 unit order that
        adds $750 to $2,000 in packaging
        cost.
    </p>
</div>

<h2>MIL-STD-129 Marking Requirements</h2>

<div class="card">
    <h4>STANDARD MIL-STD-129 MARKINGS</h4>
    <ul>
        <li>NSN — full 13-digit</li>
        <li>Part number</li>
        <li>CAGE code</li>
        <li>Nomenclature</li>
        <li>Contract number</li>
        <li>Quantity</li>
        <li>Unit of issue</li>
        <li>Date of pack</li>
        <li>Gross weight</li>
        <li>Dimensions</li>
    </ul>
</div>

<h2>Calculating Packaging Cost</h2>

<div class="card">
    <h4>PACKAGING COST ESTIMATION</h4>
    <ol>
        <li>Decode every field in
            Section D</li>
        <li>Identify materials needed</li>
        <li>Calculate quantity of each
            material</li>
        <li>Look up current prices</li>
        <li>Add labor time</li>
        <li>Include MIL-STD-129 labels</li>
        <li>Add overhead percentage</li>
    </ol>
</div>

<h2>Your Section D Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Decode every code in the
            block</li>
        <li>Identify all physical
            materials needed</li>
        <li>Check for special
            requirements codes</li>
        <li>Calculate total packaging
            cost</li>
        <li>Include in your bid price</li>
        <li>Confirm materials available</li>
    </ol>
</div>
  `;
}

function lesson_201_5(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 5
    </p>
    <h1>Section E — Inspection and
        Acceptance</h1>
    <p class="lesson-intro">
        Section E determines where and
        how your items get inspected
        before the government accepts
        them. The difference between
        origin and destination inspection
        profoundly affects your timeline.
    </p>
</div>

<h2>What Section E Contains</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Inspection
                    Point</strong></td>
                <td>ORIGIN or DESTINATION</td>
            </tr>
            <tr>
                <td><strong>Acceptance
                    Point</strong></td>
                <td>ORIGIN or DESTINATION</td>
            </tr>
            <tr>
                <td><strong>First Article
                    Test</strong></td>
                <td>Required or Waived</td>
            </tr>
            <tr>
                <td><strong>Certificate of
                    Conformance</strong></td>
                <td>Required or Not</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Destination Inspection — The Easy Path</h2>

<p>
    Destination inspection means the
    government inspects your items
    when they arrive at the DLA depot.
    You pack them up, ship them, and
    wait for acceptance. No one visits
    your facility.
</p>

<div class="card">
    <h4>DESTINATION INSPECTION</h4>
    <ul>
        <li>No inspector at your facility</li>
        <li>No scheduling with DCMA</li>
        <li>Inspection happens after
            delivery</li>
        <li>Acceptance triggers payment</li>
        <li>Lower overall cost</li>
    </ul>
</div>

<div class="callout success">
    <p class="callout-title">
        Destination Inspection Is
        the New Contractor's Friend
    </p>
    <p class="callout-text">
        For your first 20-50 DLA
        contracts, prioritize
        destination inspection
        solicitations. Simpler, faster,
        lower overhead.
    </p>
</div>

<h2>Origin Inspection — The Complex Path</h2>

<p>
    Origin inspection means a DCMA
    quality assurance representative
    visits your facility before you
    ship. They inspect the items
    against the specification, verify
    conformance, and sign off
    authorizing shipment.
</p>

<div class="card">
    <h4>ORIGIN INSPECTION</h4>
    <ul>
        <li>DCMA visits your facility</li>
        <li>Must schedule visit (10-20
            days lead time)</li>
        <li>Items can only ship after
            approval</li>
        <li>Adds 2-3 weeks to timeline</li>
        <li>Typical for higher-value
            items</li>
    </ul>
</div>

<div class="callout danger">
    <p class="callout-title">
        Origin Inspection Requires Real
        Capacity
    </p>
    <p class="callout-text">
        You need a physical facility
        where items can be inspected.
        You need to respond promptly
        when DCMA offers appointments.
        Be honest about whether you
        can support this.
    </p>
</div>

<h2>The DCMA Inspection Process</h2>

<div class="card-dark">
    <h4>ORIGIN INSPECTION WORKFLOW</h4>
    <ol>
        <li>Award notification with
            DCMA office assigned</li>
        <li>Contact DCMA within days</li>
        <li>Schedule inspection</li>
        <li>Produce and package items</li>
        <li>Inspection day</li>
        <li>Approval or rejection</li>
        <li>Ship approved items</li>
        <li>Invoice through WAWF</li>
    </ol>
</div>

<h2>Certificate of Conformance</h2>

<p>
    Some solicitations allow
    acceptance by Certificate of
    Conformance. You sign a
    statement certifying the item
    conforms to specification. This
    substitutes for external
    inspection.
</p>

<div class="card">
    <h3>When You See C of C Acceptance</h3>
    <p>
        You still need to inspect the
        items yourself before signing.
        Your inspection records may be
        requested later. Document your
        inspection process.
    </p>
</div>

<h2>First Article Testing Impact</h2>

<div class="card">
    <h4>FAT TIMELINE IMPACT</h4>
    <ul>
        <li>Produce sample — 2-4 weeks</li>
        <li>Submit for testing — 1 week</li>
        <li>Government testing — 2-4 weeks</li>
        <li>Approval decision — 1 week</li>
        <li>Full production after approval</li>
    </ul>
</div>

<h2>Your Section E Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Check Inspection Point and
            Acceptance Point</li>
        <li>If origin, verify you can
            support DCMA visit</li>
        <li>If destination, confirm
            timeline includes inspection</li>
        <li>Check for First Article
            Testing</li>
        <li>Note any quality system
            certifications</li>
    </ol>
</div>
  `;
}

function lesson_201_6(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 6
    </p>
    <h1>Section F — Deliveries or
        Performance</h1>
    <p class="lesson-intro">
        Section F tells you when and
        where to deliver and who pays
        for shipping. The FOB point
        alone can make or break a bid.
    </p>
</div>

<h2>FOB Point — Who Pays Shipping</h2>

<div class="card-danger">
    <h3>FOB DESTINATION — YOU Pay</h3>
    <p>
        You arrange freight and pay
        all shipping costs from your
        facility to the DLA depot.
        Title transfers when the
        government accepts the items.
        Freight cost must be included
        in your bid price.
    </p>
</div>

<div class="card-success">
    <h3>FOB ORIGIN — Government Pays</h3>
    <p>
        The government arranges and
        pays for transportation through
        the First Destination
        Transportation (FDT) program.
        You use the Vendor Shipment
        Module (VSM) to notify DLA.
    </p>
</div>

<div class="callout warning">
    <p class="callout-title">
        Always Get Freight Quote for
        FOB Destination
    </p>
    <p class="callout-text">
        Before bidding any FOB
        Destination solicitation, get
        an actual freight quote. On a
        $5,000 contract freight could
        be 10-40% of revenue.
    </p>
</div>

<h2>The VSM System for FOB Origin</h2>

<div class="card-dark">
    <h4>VSM WORKFLOW</h4>
    <ol>
        <li>Register for AMPS access</li>
        <li>Request VSM permission</li>
        <li>Receive FOB Origin award</li>
        <li>Prepare items for shipment</li>
        <li>Log into VSM, enter details</li>
        <li>Submit shipping request</li>
        <li>DLA schedules carrier</li>
        <li>Carrier arrives and picks up</li>
    </ol>
</div>

<h2>Delivery Days</h2>

<p>
    Section F specifies delivery days
    either ADO (After Date of Order)
    or ARO (After Receipt of Order).
    ADO is more common on DIBBS.
</p>

<div class="card-accent">
    <h4>REALISTIC DELIVERY TIMELINE</h4>
    <ul>
        <li>Days 1-2: receive PO</li>
        <li>Days 2-4: supplier order</li>
        <li>Days 4-20: supplier production</li>
        <li>Days 20-25: inspection,
            packaging</li>
        <li>Days 27-35: DCMA if needed</li>
        <li>Days 35-40: ship</li>
        <li>Days 40-45: in transit</li>
        <li>Day 45-60: delivery</li>
    </ul>
</div>

<h2>Ship-To Addresses and DoDAAC</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Depot</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>DDSP</strong></td>
                <td>Susquehanna, PA</td>
            </tr>
            <tr>
                <td><strong>DDOO</strong></td>
                <td>Oklahoma</td>
            </tr>
            <tr>
                <td><strong>DDJC</strong></td>
                <td>San Joaquin, CA</td>
            </tr>
            <tr>
                <td><strong>DDRT</strong></td>
                <td>Red River, TX</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Your Section F Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Identify FOB point</li>
        <li>For FOB Destination, get
            freight quote</li>
        <li>For FOB Origin, confirm VSM
            access</li>
        <li>Calculate realistic timeline</li>
        <li>Note ship-to DoDAAC</li>
        <li>Include freight cost in bid
            if FOB Destination</li>
    </ol>
</div>
  `;
}

function lesson_201_7(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 7
    </p>
    <h1>Section G — Contract
        Administration Data</h1>
    <p class="lesson-intro">
        Section G tells you who
        administers your contract and
        how you get paid. Every invoice
        goes through WAWF. Getting this
        right is how you actually get
        paid.
    </p>
</div>

<h2>WAWF — Your Invoicing System</h2>

<p>
    Wide Area Workflow (WAWF) is the
    Department of Defense electronic
    invoicing system. Every DLA
    contract requires invoicing
    through WAWF. There is no paper
    invoice alternative.
</p>

<div class="callout danger">
    <p class="callout-title">
        Register in WAWF Before You Win
    </p>
    <p class="callout-text">
        WAWF registration takes 1-2
        weeks. If you wait until after
        award, you will be scrambling
        while the payment clock runs.
    </p>
</div>

<h2>WAWF Document Types</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Document Type</th>
                <th>When Used</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Invoice and
                    Receiving Report
                    (Combo)</strong></td>
                <td>Most common for
                    DIBBS products</td>
            </tr>
            <tr>
                <td><strong>2-in-1</strong></td>
                <td>Service contracts</td>
            </tr>
            <tr>
                <td><strong>Receiving
                    Report</strong></td>
                <td>When receipt is
                    separate</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>DoDAAC Codes</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>DoDAAC Type</th>
                <th>Represents</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Pay Office</strong></td>
                <td>DFAS payment origin</td>
            </tr>
            <tr>
                <td><strong>Admin Office</strong></td>
                <td>Contract admin activity</td>
            </tr>
            <tr>
                <td><strong>Ship-To</strong></td>
                <td>Destination depot</td>
            </tr>
            <tr>
                <td><strong>Inspect-By</strong></td>
                <td>DCMA office</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout warning">
    <p class="callout-title">
        DoDAAC Errors Reject Invoices
    </p>
    <p class="callout-text">
        Entering the wrong DoDAAC
        causes automatic rejection.
        Copy codes exactly from
        Section G.
    </p>
</div>

<h2>Typical Payment Timeline</h2>

<div class="card-success">
    <ol>
        <li>Day 0: government accepts
            shipment</li>
        <li>Day 1-2: submit WAWF invoice</li>
        <li>Day 2-5: WAWF routing</li>
        <li>Day 5-10: admin approval</li>
        <li>Day 10-15: pay office
            schedules</li>
        <li>Day 15-30: ACH deposit</li>
    </ol>
</div>

<h2>Common WAWF Errors</h2>

<div class="card">
    <h4>TOP WAWF REJECTION REASONS</h4>
    <ul>
        <li>Wrong DoDAAC</li>
        <li>Contract number mismatch</li>
        <li>Quantity discrepancy</li>
        <li>Price variance</li>
        <li>Missing attachments</li>
        <li>Premature submission</li>
        <li>Wrong document type</li>
    </ul>
</div>

<h2>Your Section G Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Verify WAWF access under
            CAGE code</li>
        <li>Record all DoDAACs exactly</li>
        <li>Note WAWF document type</li>
        <li>Confirm SAM banking info</li>
        <li>Submit invoice within 1-2
            days of acceptance</li>
    </ol>
</div>
  `;
}

function lesson_201_8(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 8
    </p>
    <h1>Section H — Special Contract
        Requirements</h1>
    <p class="lesson-intro">
        Section H is where unusual
        requirements live. Contractors
        who skip Section H discover too
        late that they cannot fulfill
        the contract they won.
    </p>
</div>

<h2>What Section H Contains</h2>

<div class="card-dark">
    <h4>COMMON SECTION H TOPICS</h4>
    <ul>
        <li>Hazardous material
            handling</li>
        <li>Domestic manufacturing
            mandates</li>
        <li>Security clearance
            requirements</li>
        <li>Environmental compliance</li>
        <li>Specific certifications</li>
        <li>Shelf life handling</li>
        <li>Serialization requirements</li>
        <li>Special inspection
            procedures</li>
    </ul>
</div>

<h2>Hazardous Material Requirements</h2>

<div class="callout danger">
    <p class="callout-title">
        Hazmat Requires Real
        Certification
    </p>
    <p class="callout-text">
        Shipping hazmat without proper
        certification is a federal
        violation with criminal
        penalties. If Section H shows
        hazmat requirements and you
        lack certification, do not bid.
    </p>
</div>

<h2>Domestic Content Requirements</h2>

<div class="card">
    <h3>Berry Amendment</h3>
    <p>
        Requires 100 percent domestic
        origin for textiles, clothing,
        food products, hand tools,
        measuring tools, specialty
        metals. Strictly enforced.
    </p>
</div>

<div class="card">
    <h3>Specialty Metals</h3>
    <p>
        DFARS 252.225-7009 requires
        specialty metals (certain
        stainless steels, titanium)
        to be melted in US or
        qualifying countries.
    </p>
</div>

<h2>Shelf Life Handling</h2>

<div class="card-dark">
    <ul>
        <li><strong>Manufacture date
            marking</strong></li>
        <li><strong>Expiration date
            marking</strong></li>
        <li><strong>Minimum remaining
            shelf life</strong> —
            typically 75%</li>
        <li><strong>FIFO handling</strong>
            — oldest stock ships first</li>
    </ul>
</div>

<h2>Counterfeit Prevention</h2>

<div class="card">
    <h4>COUNTERFEIT PREVENTION</h4>
    <ul>
        <li>Source from OCMs or
            authorized distributors</li>
        <li>Document traceability</li>
        <li>Train personnel</li>
        <li>Inspect incoming items</li>
        <li>Report suspect items via
            GIDEP</li>
    </ul>
</div>

<div class="callout danger">
    <p class="callout-title">
        Counterfeit Parts Are Federal
        Prosecution
    </p>
    <p class="callout-text">
        Delivering counterfeit parts to
        DoD is aggressively prosecuted.
        Source carefully and document
        provenance.
    </p>
</div>

<h2>When Section H Means No Bid</h2>

<div class="card">
    <h4>AUTOMATIC DISQUALIFIERS</h4>
    <ul>
        <li>Hazmat cert for hazmat items</li>
        <li>Berry compliance for textiles</li>
        <li>Facility clearance for
            classified</li>
        <li>FDA registration for medical</li>
        <li>CMMC for CUI-handling</li>
        <li>Specific test lab certs</li>
    </ul>
</div>

<h2>Your Section H Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Scan the full Section H</li>
        <li>Flag hazmat, Berry, clearance
            requirements</li>
        <li>Identify certifications
            you lack</li>
        <li>Ask AI Tutor about
            unfamiliar requirements</li>
        <li>Price cost-adding
            requirements into bid</li>
    </ol>
</div>
  `;
}

function lesson_201_9(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 9
    </p>
    <h1>Section I — Contract Clauses</h1>
    <p class="lesson-intro">
        Section I incorporates the FAR
        (Federal Acquisition Regulation)
        and DFARS (Defense FAR
        Supplement) clauses that govern
        your contract. Most are
        standard. A few are critical.
    </p>
</div>

<h2>The Critical Clauses</h2>

<div class="card">
    <h3>Country of Origin Clauses</h3>
    <ul>
        <li><strong>FAR 52.225-1</strong>
            — Buy American</li>
        <li><strong>FAR 52.225-5</strong>
            — Trade Agreements</li>
        <li><strong>DFARS 252.225-7012</strong>
            — Preference for Domestic</li>
        <li><strong>DFARS 252.225-7009</strong>
            — Specialty Metals</li>
    </ul>
</div>

<div class="card">
    <h3>Payment Clauses</h3>
    <ul>
        <li><strong>FAR 52.232-33</strong>
            — Electronic Funds Transfer</li>
        <li><strong>DFARS 252.232-7006</strong>
            — WAWF Payment</li>
        <li><strong>FAR 52.232-25</strong>
            — Prompt Payment</li>
    </ul>
</div>

<div class="card">
    <h3>Quality Clauses</h3>
    <ul>
        <li><strong>FAR 52.246-2</strong>
            — Inspection of Supplies</li>
        <li><strong>FAR 52.246-15</strong>
            — Certificate of Conformance</li>
        <li><strong>DFARS 252.246-7007</strong>
            — Counterfeit Prevention</li>
    </ul>
</div>

<div class="card">
    <h3>Default and Termination</h3>
    <ul>
        <li><strong>FAR 52.249-8</strong>
            — Default</li>
        <li><strong>FAR 52.249-1</strong>
            — Termination for Convenience</li>
        <li><strong>FAR 52.233-1</strong>
            — Disputes</li>
    </ul>
</div>

<div class="card">
    <h3>Cybersecurity Clauses</h3>
    <ul>
        <li><strong>DFARS 252.204-7012</strong>
            — Safeguarding CUI</li>
        <li><strong>DFARS 252.204-7020</strong>
            — NIST SP 800-171</li>
        <li><strong>DFARS 252.204-7021</strong>
            — CMMC Requirements</li>
    </ul>
</div>

<h2>High-Impact Clauses</h2>

<div class="callout warning">
    <p class="callout-title">
        CLAUSES TO WATCH
    </p>
    <p class="callout-text">
        TAA clauses (restrict country
        of origin), Berry Amendment
        (100% domestic), Counterfeit
        prevention (restricts sourcing),
        CMMC clauses (cybersecurity
        required), Limitations on
        Subcontracting (percentage of
        work you must self-perform).
    </p>
</div>

<h2>Representations and Certifications</h2>

<p>
    Many Section I clauses are
    representations you make when
    submitting your quote. False
    representations are federal
    crimes under the False Claims Act.
</p>

<h2>Your Section I Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Scan for country of origin
            clauses</li>
        <li>Check for Berry Amendment</li>
        <li>Check for CMMC clauses</li>
        <li>Note hazmat/safety clauses</li>
        <li>Look for subcontracting
            limitations</li>
        <li>Ask AI Tutor about unfamiliar
            clauses</li>
    </ol>
</div>
  `;
}

function lesson_201_10(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · MODULE 10
    </p>
    <h1>Section J — Attachments and
        Exhibits</h1>
    <p class="lesson-intro">
        Section J lists the attachments
        that accompany the solicitation.
        Critical requirements often
        hide in Section J attachments.
    </p>
</div>

<h2>What Section J Contains</h2>

<div class="card-dark">
    <h4>TYPICAL SECTION J ATTACHMENTS</h4>
    <ul>
        <li>Technical Drawings</li>
        <li>Aperture Cards</li>
        <li>QPL — Qualified Products List</li>
        <li>Special Packaging
            Instructions (SPI)</li>
        <li>DD Form 1423 (CDRL)</li>
        <li>Quality Assurance Provisions</li>
        <li>Reference Specifications</li>
        <li>Test Plans</li>
        <li>Approved Source Lists</li>
    </ul>
</div>

<h2>Technical Drawings</h2>

<p>
    Technical drawings are the
    authoritative dimensional
    specification for an item. When a
    drawing is attached, your
    delivered item must match the
    drawing exactly.
</p>

<div class="callout warning">
    <p class="callout-title">
        Always Verify Drawing Revision
    </p>
    <p class="callout-text">
        If Section J references drawing
        1234567 Rev D, your item must
        conform to Revision D. A part
        made to Rev C will be rejected.
    </p>
</div>

<h2>JCP Certification for Drawings</h2>

<p>
    Many DLA drawings contain
    controlled technical data
    restricted by export control laws.
    To access these drawings, you
    need JCP (Joint Certification
    Program) certification.
</p>

<div class="card">
    <h3>What JCP Is</h3>
    <p>
        Joint Certification Program
        certifies US and Canadian
        contractors to receive
        controlled technical data.
        Without JCP, many drawings
        are unavailable.
    </p>
</div>

<div class="callout info">
    <p class="callout-title">
        JCP Is a Competitive Advantage
    </p>
    <p class="callout-text">
        Many profitable DIBBS
        opportunities have JCP-
        restricted drawings because
        fewer contractors compete.
    </p>
</div>

<h2>QPL — Qualified Products Lists</h2>

<div class="card-dark">
    <h4>READING A QPL</h4>
    <table>
        <thead>
            <tr>
                <th>QPL Element</th>
                <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>QPL
                    Number</strong></td>
                <td>Specification ID</td>
            </tr>
            <tr>
                <td><strong>Manufacturer
                    CAGE</strong></td>
                <td>Qualified supplier</td>
            </tr>
            <tr>
                <td><strong>Part Number</strong></td>
                <td>Specific qualified
                    part</td>
            </tr>
            <tr>
                <td><strong>Qualification
                    Date</strong></td>
                <td>When approved</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Special Packaging Instructions</h2>

<p>
    Sometimes Section D packaging
    requirements are overridden by
    Special Packaging Instructions
    in Section J. When an SPI is
    attached, it takes precedence.
</p>

<h2>DD Form 1423 — CDRL</h2>

<p>
    The Contract Data Requirements
    List specifies documents you must
    deliver as part of contract
    performance. In addition to the
    physical items.
</p>

<div class="card">
    <h4>COMMON CDRL DELIVERABLES</h4>
    <ul>
        <li>Certificates of Conformance</li>
        <li>Material test reports</li>
        <li>Inspection reports</li>
        <li>First Article Test reports</li>
        <li>Calibration certificates</li>
        <li>Traceability documentation</li>
    </ul>
</div>

<h2>Your Section J Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Download every attachment</li>
        <li>Check drawing revisions</li>
        <li>Verify QPL source
            availability</li>
        <li>Look for SPIs overriding
            Section D</li>
        <li>Identify CDRL deliverables</li>
        <li>Verify JCP for restricted
            drawings</li>
    </ol>
</div>
  `;
}

function lesson_201_cap(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 201 · CAPSTONE
    </p>
    <h1>Capstone — Full Section
        Analysis</h1>
    <p class="lesson-intro">
        You have completed the
        Navigation curriculum. This
        capstone puts it all together —
        analyze a complete solicitation
        systematically, section by
        section.
    </p>
</div>

<h2>What This Capstone Covers</h2>

<div class="card-accent">
    <h4>CAPSTONE OBJECTIVES</h4>
    <ul>
        <li>Read every section of a
            complete solicitation</li>
        <li>Extract the critical data
            from each section</li>
        <li>Identify potential
            deal-breakers</li>
        <li>Calculate true cost</li>
        <li>Determine whether to bid</li>
        <li>Document your analysis</li>
    </ul>
</div>

<h2>10-Section Analysis Framework</h2>

<div class="card-dark">
    <h4>SYSTEMATIC ANALYSIS</h4>
    <ol>
        <li><strong>Section A</strong> —
            Verify status, due date,
            amendments, set-aside</li>
        <li><strong>Section B</strong> —
            Decode NSN, verify UOI,
            calculate quantity</li>
        <li><strong>Section C</strong> —
            Identify specs, QPL, country
            of origin</li>
        <li><strong>Section D</strong> —
            Decode packaging codes,
            estimate cost</li>
        <li><strong>Section E</strong> —
            Origin or destination
            inspection</li>
        <li><strong>Section F</strong> —
            FOB point, freight quote,
            delivery days</li>
        <li><strong>Section G</strong> —
            Verify WAWF, record DoDAACs</li>
        <li><strong>Section H</strong> —
            Scan for deal-breakers</li>
        <li><strong>Section I</strong> —
            Identify critical clauses</li>
        <li><strong>Section J</strong> —
            Download attachments</li>
    </ol>
</div>

<h2>Complete Cost Equation</h2>

<div class="card-success">
    <ol>
        <li>Item cost from supplier</li>
        <li>+ Shipping to you</li>
        <li>+ Packaging cost</li>
        <li>+ Inspection time</li>
        <li>+ Freight to DLA</li>
        <li>+ Documentation cost</li>
        <li>+ Overhead (10-20%)</li>
        <li>+ Profit margin</li>
        <li>= Bid price per unit</li>
    </ol>
</div>

<h2>Decision Framework</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Scenario</th>
                <th>Decision</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Price below historical
                    average with margin</td>
                <td>Strong bid</td>
            </tr>
            <tr>
                <td>Price matches
                    historical</td>
                <td>Bid with confidence</td>
            </tr>
            <tr>
                <td>10-20% above
                    historical</td>
                <td>Reconsider pricing</td>
            </tr>
            <tr>
                <td>Significantly above</td>
                <td>Do not bid</td>
            </tr>
            <tr>
                <td>Section H requirements
                    you cannot meet</td>
                <td>Do not bid</td>
            </tr>
            <tr>
                <td>Delivery timeline too
                    tight</td>
                <td>Do not bid</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout success">
    <p class="callout-title">
        This Is What Level 201 Trained
        You For
    </p>
    <p class="callout-text">
        Every Level 201 module built a
        specific skill. This capstone
        requires all of them working
        together. The discipline you
        build here determines how
        profitable your contracting
        practice becomes.
    </p>
</div>

<h2>After Your Capstone</h2>

<p>
    Level 301 teaches you to analyze
    solicitations for competitive
    intelligence — procurement history
    analysis, pricing strategy,
    sourcing strategy, and compliance
    reality. Level 401 covers long-term
    strategy.
</p>
  `;
}

// ── LEVEL 301 ANALYSIS ────────────────────────

function lesson_301_1(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 1
    </p>
    <h1>The Go/No-Go Framework</h1>
    <p class="lesson-intro">
        The single most important skill
        in DLA contracting is knowing
        when to walk away. Most new
        contractors fail not because
        they lose bids but because they
        win the wrong bids.
    </p>
</div>

<h2>Why Most New Contractors Fail</h2>

<p>
    The failure pattern is predictable.
    New contractors register, start
    bidding aggressively, win a few
    contracts, discover they cannot
    fulfill them profitably, get
    rejections or late deliveries,
    damage past performance, and either
    quit or struggle for years.
</p>

<div class="callout warning">
    <p class="callout-title">
        Winning Is Not Success
    </p>
    <p class="callout-text">
        Winning a contract you cannot
        fulfill profitably is worse
        than losing it. Default
        terminations damage your past
        performance and prevent future
        awards.
    </p>
</div>

<h2>The Seven-Question Framework</h2>

<div class="card-accent">
    <h3>Question 1: Can You Actually Source?</h3>
    <p>
        Can you source the exact item
        specified, from a supplier who
        will deliver on time, at a price
        that supports a profitable bid?
    </p>
</div>

<div class="card-accent">
    <h3>Question 2: Can You Deliver in Time?</h3>
    <p>
        Map out the complete timeline
        honestly. Supplier lead time plus
        shipping plus inspection plus
        packaging plus shipping to DLA.
    </p>
</div>

<div class="card-accent">
    <h3>Question 3: Will Price Be Competitive?</h3>
    <p>
        Look at the procurement history.
        If historical awards ran $10 and
        your cost is $15, you cannot bid
        competitively.
    </p>
</div>

<div class="card-accent">
    <h3>Question 4: Do You Meet Compliance?</h3>
    <p>
        TAA, Berry, hazmat, CMMC, FDA —
        whatever the requirements, do
        you actually have them?
    </p>
</div>

<div class="card-accent">
    <h3>Question 5: Can You Meet Packaging?</h3>
    <p>
        Section D requirements range
        from trivial to complex. Can you
        produce the required packaging?
    </p>
</div>

<div class="card-accent">
    <h3>Question 6: Worth Your Time?</h3>
    <p>
        Some solicitations have total
        values so small that even a
        profitable bid is not worth the
        overhead.
    </p>
</div>

<div class="card-accent">
    <h3>Question 7: Fits Your Strategy?</h3>
    <p>
        Every contract either builds
        toward a strategic position or
        distracts from it.
    </p>
</div>

<h2>The Quick Screen</h2>

<div class="card-dark">
    <h4>30-SECOND INITIAL SCREEN</h4>
    <ul>
        <li>FSC code in your target list?</li>
        <li>Set-aside you qualify for?</li>
        <li>Quantity above minimum?</li>
        <li>Still open in DIBBS?</li>
        <li>Supply center you know?</li>
    </ul>
</div>

<div class="callout info">
    <p class="callout-title">
        Hit Rate Reality
    </p>
    <p class="callout-text">
        Successful DLA contractors
        typically bid on 5-15% of
        solicitations in their target
        FSC codes. Quality of bids
        matters more than quantity.
    </p>
</div>

<h2>Your Go/No-Go Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Run 30-second quick screen</li>
        <li>Full analysis only if screen
            passes</li>
        <li>Apply all seven questions
            honestly</li>
        <li>Any genuine no means walk away</li>
        <li>Document your reasoning</li>
        <li>Track win rate and adjust</li>
    </ol>
</div>
  `;
}

function lesson_301_2(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 2
    </p>
    <h1>Reading Procurement History</h1>
    <p class="lesson-intro">
        Every DIBBS solicitation includes
        a procurement history block —
        actual data from previous
        purchases of the same NSN.
        Professionals mine it for
        strategic intelligence.
    </p>
</div>

<h2>What Procurement History Reveals</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>What It Reveals</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>CAGE Code</strong></td>
                <td>Your competitor or
                    incumbent</td>
            </tr>
            <tr>
                <td><strong>Contract Number</strong></td>
                <td>Specific reference</td>
            </tr>
            <tr>
                <td><strong>Quantity</strong></td>
                <td>Units in that award</td>
            </tr>
            <tr>
                <td><strong>Unit Price</strong></td>
                <td>Actual winning price</td>
            </tr>
            <tr>
                <td><strong>Award Date</strong></td>
                <td>Timing patterns</td>
            </tr>
            <tr>
                <td><strong>Surplus Flag</strong></td>
                <td>Used material acceptable?</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>The Recency Principle</h2>

<div class="card-accent">
    <h4>WEIGHING HISTORICAL AWARDS</h4>
    <ul>
        <li><strong>Last 6 months</strong>
            — highly relevant</li>
        <li><strong>6-18 months ago</strong>
            — relevant with inflation
            adjustment</li>
        <li><strong>18-36 months ago</strong>
            — historical trend</li>
        <li><strong>3+ years ago</strong>
            — reference only</li>
    </ul>
</div>

<h2>Identifying the Incumbent</h2>

<div class="callout warning">
    <p class="callout-title">
        Incumbents Are Hard to Displace
    </p>
    <p class="callout-text">
        A contractor who has won the
        same NSN three times in the
        last 18 months has established
        sourcing, proven performance,
        and likely a pricing advantage.
    </p>
</div>

<h2>Price Trend Analysis</h2>

<div class="card">
    <h3>Rising Prices</h3>
    <p>
        Causes: inflation, supplier
        consolidation, material cost
        increases. Your bid can
        reasonably be higher than
        older awards.
    </p>
</div>

<div class="card">
    <h3>Falling Prices</h3>
    <p>
        Causes: new suppliers, competition,
        commodity price declines. Your
        bid must be at or below the most
        recent award.
    </p>
</div>

<div class="card">
    <h3>Stable Prices</h3>
    <p>
        Market has stabilized around a
        consistent price point. Target
        the historical average.
    </p>
</div>

<h2>The Surplus Flag</h2>

<p>
    When the surplus flag is Y, the
    government accepted surplus
    material. Surplus costs
    significantly less than new
    production. If the current
    solicitation requires new and
    recent awards were surplus, the
    new production price may be much
    higher than shown.
</p>

<h2>Competitive Intelligence</h2>

<div class="card-dark">
    <ul>
        <li>Company size and location</li>
        <li>Primary business activities</li>
        <li>Small business status</li>
        <li>Other DoD contract history</li>
        <li>How long active vendor</li>
        <li>Their NAICS codes</li>
    </ul>
</div>

<h2>Your History Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Sort by most recent</li>
        <li>Identify the incumbent</li>
        <li>Assess price trend</li>
        <li>Check surplus flag</li>
        <li>Compare quantities</li>
        <li>Calculate competitive price</li>
    </ol>
</div>
  `;
}

function lesson_301_3(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 3
    </p>
    <h1>Compliance Reality Check</h1>
    <p class="lesson-intro">
        Compliance requirements get
        treated as legal abstractions in
        training materials. In reality
        they either disqualify you from
        bidding or add specific costs.
    </p>
</div>

<h2>Trade Agreements Act Reality</h2>

<div class="card-dark">
    <h3>TAA-Compliant Countries</h3>
    <p>
        United States, Canada, UK,
        Germany, France, Italy, Japan,
        South Korea, Australia, Israel,
        Mexico, and many more.
    </p>
    <p>
        Non-compliant: China, Russia,
        Iran, North Korea, Vietnam,
        Malaysia, Thailand, Philippines,
        India, and many others.
    </p>
</div>

<div class="callout danger">
    <p class="callout-title">
        TAA Is About Manufacturing Origin
    </p>
    <p class="callout-text">
        Where the item was shipped from
        does not matter. Where it was
        manufactured or substantially
        transformed is what counts.
    </p>
</div>

<h2>Berry Amendment Reality</h2>

<div class="card-danger">
    <h4>BERRY CATEGORIES</h4>
    <ul>
        <li>Clothing and textiles</li>
        <li>Food products</li>
        <li>Hand tools and measuring
            tools</li>
        <li>Specialty metals</li>
    </ul>
</div>

<div class="callout warning">
    <p class="callout-title">
        Berry Is Supply Chain Deep
    </p>
    <p class="callout-text">
        For textiles, Berry applies
        from cotton growth through
        finished garment. Any foreign
        step breaks compliance.
    </p>
</div>

<h2>CMMC Cybersecurity</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Level</th>
                <th>Requirements</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Level 1</strong></td>
                <td>17 basic practices,
                    self-assessment</td>
            </tr>
            <tr>
                <td><strong>Level 2</strong></td>
                <td>110 practices,
                    third-party assessment</td>
            </tr>
            <tr>
                <td><strong>Level 3</strong></td>
                <td>Advanced practices for
                    highest-sensitivity CUI</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Counterfeit Prevention</h2>

<div class="callout danger">
    <p class="callout-title">
        Counterfeit Delivery Is Federal
        Crime
    </p>
    <p class="callout-text">
        Delivering suspect counterfeit
        items is aggressively prosecuted.
        Source from OCMs or authorized
        distributors only.
    </p>
</div>

<h2>Your Compliance Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Check Sections H and I for
            requirements</li>
        <li>Verify certifications current</li>
        <li>Get written supplier origin
            verification</li>
        <li>Document compliance evidence</li>
        <li>Price compliance overhead</li>
        <li>Walk away if you cannot meet</li>
    </ol>
</div>
  `;
}

function lesson_301_4(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 4
    </p>
    <h1>Technical Risk Assessment</h1>
    <p class="lesson-intro">
        Technical risk is the risk that
        your sourced item does not meet
        specification at inspection.
        Rejection costs money and
        damages past performance.
    </p>
</div>

<h2>Categories of Technical Risk</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Risk Type</th>
                <th>Source</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Specification ambiguity</td>
                <td>Unclear Section C</td>
            </tr>
            <tr>
                <td>QPL restriction</td>
                <td>Pre-qualified only</td>
            </tr>
            <tr>
                <td>FAT required</td>
                <td>Sample approval first</td>
            </tr>
            <tr>
                <td>Drawing revision</td>
                <td>Must match exact rev</td>
            </tr>
            <tr>
                <td>Counterfeit risk</td>
                <td>Source authenticity</td>
            </tr>
            <tr>
                <td>Material cert</td>
                <td>Specific properties</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>QPL Items — The Access Problem</h2>

<div class="card">
    <h3>QPL Manufacturer Access</h3>
    <p>
        QPL manufacturers sell through
        their own channels. If you
        cannot establish an account or
        get authorized distribution,
        you cannot supply QPL items.
    </p>
</div>

<div class="card">
    <h3>QPL Pricing Dynamics</h3>
    <p>
        QPL items typically carry
        30-100% price premiums over
        non-qualified equivalents. Your
        bid must accommodate this.
    </p>
</div>

<h2>First Article Testing Reality</h2>

<div class="card-dark">
    <h4>FAT TIMELINE IMPACT</h4>
    <table>
        <tbody>
            <tr>
                <td>Produce sample</td>
                <td>2-4 weeks</td>
            </tr>
            <tr>
                <td>Ship to test lab</td>
                <td>3-5 days</td>
            </tr>
            <tr>
                <td>Test conducted</td>
                <td>2-6 weeks</td>
            </tr>
            <tr>
                <td>Approval decision</td>
                <td>1-2 weeks</td>
            </tr>
            <tr>
                <td><strong>Total overhead</strong></td>
                <td><strong>6-12 weeks</strong></td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout danger">
    <p class="callout-title">
        FAT Often Makes Delivery Impossible
    </p>
    <p class="callout-text">
        If a solicitation requires FAT
        and allows 60 days ADO, the
        math often does not work.
        Calculate carefully.
    </p>
</div>

<h2>Counterfeit Risk by Item Type</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Item Type</th>
                <th>Risk Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Electronic semiconductors</td>
                <td>Very high</td>
            </tr>
            <tr>
                <td>High-value military parts</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Fasteners, hardware</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>From OCM distributors</td>
                <td>Low</td>
            </tr>
            <tr>
                <td>From independents</td>
                <td>Higher</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Your Technical Risk Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Obtain complete spec</li>
        <li>Verify supplier capability</li>
        <li>Check QPL status</li>
        <li>Confirm drawing revision</li>
        <li>Assess FAT timeline</li>
        <li>Verify material certs</li>
        <li>Price technical risk</li>
    </ol>
</div>
  `;
}

function lesson_301_5(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 5
    </p>
    <h1>Sourcing Strategy</h1>
    <p class="lesson-intro">
        Profitable DLA contracting is
        won at the supplier
        relationship level. The
        contractor with better sourcing
        beats the contractor with a
        better spreadsheet.
    </p>
</div>

<h2>Supplier Types and Tradeoffs</h2>

<div class="card">
    <h3>Original Component Manufacturers</h3>
    <p>
        The companies that actually make
        the item. Direct pricing,
        authoritative specs, lowest
        counterfeit risk. Best for QPL
        items and high-value items.
    </p>
</div>

<div class="card">
    <h3>Authorized Distributors</h3>
    <p>
        Distributors officially authorized
        by the OCM. Inherit OCM
        traceability. Best for electronic
        components and industrial
        supplies.
    </p>
</div>

<div class="card">
    <h3>Independent Distributors</h3>
    <p>
        Not authorized by any OCM.
        Sometimes better pricing through
        volume. Higher counterfeit risk
        on electronics.
    </p>
</div>

<div class="card">
    <h3>Surplus Dealers</h3>
    <p>
        Previously-owned government
        surplus material. Excellent
        pricing when allowed. Limited
        availability.
    </p>
</div>

<h2>Building Supplier Relationships</h2>

<div class="card-success">
    <h4>SUPPLIER DEVELOPMENT</h4>
    <ol>
        <li>Identify target suppliers</li>
        <li>Initial contact</li>
        <li>Establish credit</li>
        <li>First small order</li>
        <li>Ongoing consistent orders</li>
        <li>Relationship deepening</li>
        <li>Partner status</li>
    </ol>
</div>

<h2>Credit Terms Progression</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Stage</th>
                <th>Typical Terms</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>New account</td>
                <td>Credit card or COD</td>
            </tr>
            <tr>
                <td>First 90 days</td>
                <td>Net 10 or 15</td>
            </tr>
            <tr>
                <td>6 months history</td>
                <td>Net 30</td>
            </tr>
            <tr>
                <td>Large volume</td>
                <td>Net 45-60</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout warning">
    <p class="callout-title">
        Pay Invoices On Time Always
    </p>
    <p class="callout-text">
        Late payment destroys supplier
        relationships. Payment history
        follows you across all supplier
        relationships.
    </p>
</div>

<h2>Distributor Markups</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Item Type</th>
                <th>Typical Markup</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Electronics</td>
                <td>List price often</td>
            </tr>
            <tr>
                <td>Commodity hardware</td>
                <td>20-30%</td>
            </tr>
            <tr>
                <td>Industrial supplies</td>
                <td>15-25%</td>
            </tr>
            <tr>
                <td>Specialty items</td>
                <td>25-50%+</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Managing Supplier Risk</h2>

<div class="card-warning">
    <h4>RISK MITIGATION</h4>
    <ul>
        <li>Multiple suppliers per FSC</li>
        <li>Alternative manufacturers</li>
        <li>Understand supplier health</li>
        <li>Monitor delivery performance</li>
        <li>Maintain backup options</li>
        <li>Document supplier contacts</li>
    </ul>
</div>

<h2>Your Sourcing Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Target suppliers for each
            FSC code</li>
        <li>Establish accounts</li>
        <li>Start with small orders</li>
        <li>Grow volume systematically</li>
        <li>Negotiate better terms</li>
        <li>Maintain backup suppliers</li>
        <li>Review performance
            quarterly</li>
    </ol>
</div>
  `;
}

function lesson_301_6(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 6
    </p>
    <h1>Competitive Price Analysis</h1>
    <p class="lesson-intro">
        Pricing correctly is the
        difference between contracts
        that build your business and
        contracts that drain it.
    </p>
</div>

<h2>The Pricing Challenge</h2>

<p>
    DIBBS awards go to the lowest
    responsive responsible bidder.
    Underprice and you win but lose
    money. Overprice and you lose the
    bid.
</p>

<div class="callout warning">
    <p class="callout-title">
        Win Rate vs Profit Rate
    </p>
    <p class="callout-text">
        New contractors focus on win
        rate. Experienced contractors
        focus on profit rate. You can
        have a high win rate with zero
        profit if you price too low.
    </p>
</div>

<h2>Building Your Cost Basis</h2>

<div class="card-success">
    <h4>COMPLETE COST BASIS</h4>
    <ol>
        <li>Item cost from supplier</li>
        <li>Inbound freight</li>
        <li>Receiving and inspection</li>
        <li>Packaging materials</li>
        <li>Packaging labor</li>
        <li>MIL-STD-129 labeling</li>
        <li>Documentation</li>
        <li>Outbound freight</li>
        <li>Contract admin overhead</li>
        <li>Business overhead</li>
        <li>Risk contingency</li>
    </ol>
</div>

<h2>Calculating Overhead</h2>

<div class="card">
    <h3>Monthly Overhead Method</h3>
    <ol>
        <li>Sum monthly business expenses</li>
        <li>Divide by typical monthly
            revenue</li>
        <li>Result is overhead percentage</li>
        <li>Apply to every contract</li>
    </ol>
    <p>
        Typical overhead: 15-30% for
        small DLA contractors.
    </p>
</div>

<h2>The Margin Decision</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Item Type</th>
                <th>Typical Margin</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Commodity, competitive</td>
                <td>5-15%</td>
            </tr>
            <tr>
                <td>Standard items</td>
                <td>15-25%</td>
            </tr>
            <tr>
                <td>Specialty, limited
                    competition</td>
                <td>25-50%</td>
            </tr>
            <tr>
                <td>Complex, high risk</td>
                <td>50%+</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Competitive Pricing Decision</h2>

<div class="card-accent">
    <h4>PRICING DECISION TREE</h4>
    <ol>
        <li>Calculate all-in cost</li>
        <li>Calculate price at margin</li>
        <li>Compare to recent history</li>
        <li>Within 5% — bid as calculated</li>
        <li>10-15% above — reconsider</li>
        <li>Significantly above — walk
            away</li>
        <li>Significantly below — check
            your math</li>
    </ol>
</div>

<div class="callout danger">
    <p class="callout-title">
        If Price Is Way Below Historical
        — Check Your Work
    </p>
    <p class="callout-text">
        Historical prices reflect what
        contractors actually pay to
        fulfill similar requirements.
        If your price is dramatically
        lower, you likely missed a
        cost.
    </p>
</div>

<h2>Price Reasonableness</h2>

<p>
    Contracting officers must
    determine your price is reasonable
    before awarding. Prices that
    appear unreasonably high or low
    can be rejected.
</p>

<h2>Your Pricing Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Calculate complete cost basis</li>
        <li>Apply appropriate margin</li>
        <li>Compare to recent historical</li>
        <li>Adjust if significantly off</li>
        <li>Double-check math</li>
        <li>Document pricing rationale</li>
    </ol>
</div>
  `;
}

function lesson_301_7(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · MODULE 7
    </p>
    <h1>Contract Types and Risk</h1>
    <p class="lesson-intro">
        Most DIBBS awards are firm
        fixed-price contracts, but
        understanding the full range
        helps you recognize unusual
        situations and price accordingly.
    </p>
</div>

<h2>Firm Fixed Price (FFP)</h2>

<p>
    The standard DIBBS contract.
    Fixed price, fixed quantity, fixed
    delivery. You bear all risk of
    cost increases. This is nearly
    every DIBBS RFQ you will encounter.
</p>

<div class="card">
    <h4>FFP CHARACTERISTICS</h4>
    <ul>
        <li>Price locked at award</li>
        <li>Cost overruns are yours</li>
        <li>Cost savings are yours</li>
        <li>Simplest contract type</li>
        <li>Most common on DIBBS</li>
    </ul>
</div>

<h2>Indefinite Delivery Contracts</h2>

<div class="card">
    <h3>IDIQ (Indefinite Delivery,
        Indefinite Quantity)</h3>
    <p>
        Government commits to a minimum
        and maximum quantity over
        contract period. Specific
        orders placed as needed.
        Occasional on DIBBS.
    </p>
</div>

<div class="card">
    <h3>Blanket Purchase Agreement</h3>
    <p>
        Pre-negotiated prices for
        recurring items. Orders placed
        against the BPA as needed.
    </p>
</div>

<h2>Commercial Items Contract</h2>

<p>
    Uses FAR Part 12 streamlined
    procedures. Commercial terms
    instead of full military contract
    clauses. Most DIBBS items under
    SAT are treated as commercial.
</p>

<h2>Set-Aside Contract Types</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Characteristic</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Small Business</td>
                <td>Any qualifying small</td>
            </tr>
            <tr>
                <td>Sole Source 8(a)</td>
                <td>Single 8(a) vendor</td>
            </tr>
            <tr>
                <td>Competitive 8(a)</td>
                <td>Multiple 8(a) compete</td>
            </tr>
            <tr>
                <td>HUBZone</td>
                <td>HUBZone certified only</td>
            </tr>
            <tr>
                <td>SDVOSB</td>
                <td>Veteran-owned only</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Contract Risk Factors</h2>

<div class="card-warning">
    <h4>HIGH RISK INDICATORS</h4>
    <ul>
        <li>Long delivery windows with
            volatile inputs</li>
        <li>Specialty metals or rare
            materials</li>
        <li>Single-source items</li>
        <li>Untested supplier relationships</li>
        <li>Complex packaging requirements</li>
        <li>Origin inspection new facility</li>
        <li>First Article Testing</li>
    </ul>
</div>

<h2>Options and Option Years</h2>

<p>
    Some contracts include options
    for additional quantities or
    extended time periods. Pricing
    options carefully matters because
    you may be committed for years.
</p>

<h2>Your Contract Types Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Identify contract type</li>
        <li>Read full terms carefully</li>
        <li>Note any options or option
            years</li>
        <li>Understand risk allocation</li>
        <li>Price risk contingency
            appropriately</li>
    </ol>
</div>
  `;
}

function lesson_301_cap(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 301 · CAPSTONE
    </p>
    <h1>Capstone — Evaluate Three
        Solicitations</h1>
    <p class="lesson-intro">
        Level 301 taught you to analyze
        solicitations for competitive
        intelligence, compliance,
        technical risk, sourcing, and
        pricing. This capstone requires
        you to apply all of it.
    </p>
</div>

<h2>Your Capstone Assignment</h2>

<p>
    Over the next several days,
    analyze three different real DIBBS
    solicitations. Document your
    analysis and decision for each.
</p>

<div class="card-accent">
    <h4>SOLICITATION SELECTION</h4>
    <ol>
        <li><strong>One you expect to
            pursue</strong> — good
            historical pricing</li>
        <li><strong>One with
            complications</strong> —
            maybe FAT or Section H</li>
        <li><strong>One walk-away</strong>
            — outside your FSC or
            requirements you cannot
            meet</li>
    </ol>
</div>

<h2>Analysis Documentation</h2>

<div class="card-dark">
    <ol>
        <li>Solicitation identification</li>
        <li>Seven-question Go/No-Go</li>
        <li>Procurement history analysis</li>
        <li>Compliance check</li>
        <li>Technical risk assessment</li>
        <li>Sourcing plan</li>
        <li>Cost calculation</li>
        <li>Pricing decision</li>
        <li>Final decision with
            reasoning</li>
    </ol>
</div>

<h2>Go Decision Format</h2>

<div class="card-success">
    <ul>
        <li>Decision: GO</li>
        <li>Target bid price</li>
        <li>Expected margin</li>
        <li>Primary and backup suppliers</li>
        <li>Key risks identified</li>
        <li>Mitigation plan</li>
        <li>Delivery timeline</li>
    </ul>
</div>

<h2>No-Go Decision Format</h2>

<div class="card-danger">
    <ul>
        <li>Decision: NO-GO</li>
        <li>Primary reason</li>
        <li>Contributing factors</li>
        <li>What would change decision</li>
        <li>Lessons learned</li>
    </ul>
</div>

<div class="callout success">
    <p class="callout-title">
        You Are Ready for the Next Level
    </p>
    <p class="callout-text">
        Completing this capstone means
        you can evaluate any DIBBS
        solicitation with professional
        rigor. Level 401 takes you from
        good decisions to building a
        sustainable business.
    </p>
</div>
  `;
}

// ── LEVEL 401 MASTERY ─────────────────────────

function lesson_401_1(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 1
    </p>
    <h1>Building a Long-Term DIBBS
        Strategy</h1>
    <p class="lesson-intro">
        Most DLA contractors operate
        reactively. Professional
        contractors operate strategically
        — they build a deliberate
        portfolio of recurring NSNs.
    </p>
</div>

<h2>The Portfolio Mindset</h2>

<p>
    Think of your DLA business as a
    portfolio of NSNs. Each NSN you
    regularly win is a position. Each
    position generates recurring
    revenue. A contractor with 30-50
    recurring NSN positions at 20-30%
    margins builds a stable seven-
    figure business.
</p>

<div class="callout info">
    <p class="callout-title">
        The Recurring NSN Is Your Asset
    </p>
    <p class="callout-text">
        When you win an NSN repeatedly
        — 3 times in 18 months — that
        NSN becomes a revenue-generating
        asset. Build a portfolio of
        these.
    </p>
</div>

<h2>Strategic Position Questions</h2>

<div class="card">
    <h3>Which FSC Codes Will You Own?</h3>
    <p>
        Pick 3-8 FSC codes where you
        plan to build deep expertise.
        These are your core territory.
    </p>
</div>

<div class="card">
    <h3>What Position Do You Want?</h3>
    <ul>
        <li><strong>Volume player</strong>
            — compete on price</li>
        <li><strong>Specialty supplier</strong>
            — complex items</li>
        <li><strong>Niche expert</strong>
            — narrow category</li>
        <li><strong>Generalist
            distributor</strong> —
            broad coverage</li>
    </ul>
</div>

<div class="card">
    <h3>Revenue Target?</h3>
    <ul>
        <li>$500K — 50-100 small
            contracts</li>
        <li>$1M — 30-50 recurring NSNs</li>
        <li>$5M — larger contracts</li>
        <li>$10M+ — staff and
            infrastructure</li>
    </ul>
</div>

<h2>The Pipeline Model</h2>

<div class="card-dark">
    <h4>PIPELINE STAGES</h4>
    <ol>
        <li>Prospecting — finding NSNs</li>
        <li>Qualifying — evaluating</li>
        <li>Bidding — submitting quotes</li>
        <li>Winning — converting</li>
        <li>Fulfilling — delivering</li>
        <li>Repeating — winning again</li>
        <li>Expanding — adjacent NSNs</li>
    </ol>
</div>

<h2>The Incumbent Position</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Advantage</th>
                <th>Impact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Faster bidding</td>
                <td>Minutes vs hours</td>
            </tr>
            <tr>
                <td>Accurate costing</td>
                <td>Known supplier prices</td>
            </tr>
            <tr>
                <td>Supplier relationships</td>
                <td>Priority access</td>
            </tr>
            <tr>
                <td>Past performance</td>
                <td>Documented success</td>
            </tr>
            <tr>
                <td>Higher margins</td>
                <td>Experience premium</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>The Five-Year View</h2>

<div class="card-accent">
    <h3>Year 1: Foundation</h3>
    <p>
        Registrations, DIBBS workflow,
        initial supplier relationships.
        5-10 successful deliveries.
    </p>
</div>

<div class="card-accent">
    <h3>Year 2: Traction</h3>
    <p>
        Identify recurring NSNs, focus
        on winning them again. 20-30
        deliveries. $150-500K revenue.
    </p>
</div>

<div class="card-accent">
    <h3>Year 3: Expansion</h3>
    <p>
        Incumbent status on 10-20 NSNs.
        Expand to adjacent FSC codes.
        $500K-1.5M revenue.
    </p>
</div>

<div class="card-accent">
    <h3>Year 4: Optimization</h3>
    <p>
        Refine pricing. Drop unprofitable.
        Pursue larger contracts. $1-3M
        revenue.
    </p>
</div>

<div class="card-accent">
    <h3>Year 5: Maturity</h3>
    <p>
        Stable recurring revenue from
        30-60 NSNs. Clear systems.
        $2-10M+ revenue.
    </p>
</div>

<h2>Your Strategic Action Items</h2>

<div class="card-accent">
    <ol>
        <li>Write target FSC code list</li>
        <li>Define strategic position</li>
        <li>Set 1/3/5-year revenue goals</li>
        <li>List current recurring NSNs</li>
        <li>Identify 5-10 target NSNs</li>
        <li>Schedule quarterly reviews</li>
    </ol>
</div>
  `;
}

function lesson_401_2(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 2
    </p>
    <h1>Advanced Pricing Strategy</h1>
    <p class="lesson-intro">
        Basic pricing wins individual
        contracts. Advanced pricing
        builds a profitable business
        over years.
    </p>
</div>

<h2>Pricing Beyond Individual Bids</h2>

<p>
    Amateur contractors think about
    each bid in isolation. Professional
    contractors think about each bid
    as part of a relationship with an
    NSN over time.
</p>

<h2>Lifetime Value of an NSN</h2>

<div class="card-accent">
    <h4>HIGH LTV INDICATORS</h4>
    <ul>
        <li>Regular recurring purchases</li>
        <li>High Estimated Annual Usage</li>
        <li>Active weapon system 10+
            years</li>
        <li>Few alternative suppliers</li>
        <li>Healthy margin</li>
    </ul>
</div>

<div class="card-warning">
    <h4>LOW LTV INDICATORS</h4>
    <ul>
        <li>One-time special purchase</li>
        <li>Phasing-out system</li>
        <li>Many competing suppliers</li>
        <li>Thin margin</li>
        <li>Strong downward trend</li>
    </ul>
</div>

<h2>Inflation Analysis</h2>

<p>
    Historical prices need inflation
    adjustment. Using raw historical
    prices leads to systematically
    underbidding.
</p>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Period</th>
                <th>Annual Inflation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2021-2022</td>
                <td>8%</td>
            </tr>
            <tr>
                <td>2022-2023</td>
                <td>4%</td>
            </tr>
            <tr>
                <td>2024-2025</td>
                <td>2.5-3%</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>The Recompetition Strategy</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Previous Result</th>
                <th>Strategy</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Won healthy margin</td>
                <td>Similar price</td>
            </tr>
            <tr>
                <td>Won thin margin</td>
                <td>Bid slightly higher</td>
            </tr>
            <tr>
                <td>Lost money</td>
                <td>Bid materially higher</td>
            </tr>
            <tr>
                <td>Cost decreased</td>
                <td>Maintain, take margin</td>
            </tr>
            <tr>
                <td>Cost increased</td>
                <td>Raise price</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Price Signaling Problem</h2>

<div class="callout warning">
    <p class="callout-title">
        Aggressive Pricing Has Multi-
        Year Effects
    </p>
    <p class="callout-text">
        A deep discount today affects
        the next 3-5 years of bidding
        on the same NSN. Be thoughtful
        about what you set up for the
        future.
    </p>
</div>

<h2>Supplier Pricing Negotiation</h2>

<div class="card-success">
    <h4>NEGOTIATION LEVERAGE</h4>
    <ul>
        <li>Volume commitment</li>
        <li>Payment terms</li>
        <li>Exclusivity</li>
        <li>Forecast accuracy</li>
        <li>Relationship length</li>
    </ul>
</div>

<h2>Your Pricing Mastery Actions</h2>

<div class="card-accent">
    <ol>
        <li>Track every bid win/loss</li>
        <li>Apply inflation adjustment</li>
        <li>Test price elasticity</li>
        <li>Negotiate volume discounts</li>
        <li>Review NSN profitability
            quarterly</li>
        <li>Drop unprofitable positions</li>
    </ol>
</div>
  `;
}

function lesson_401_3(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 3
    </p>
    <h1>Delivery Performance
        Management</h1>
    <p class="lesson-intro">
        Your delivery performance record
        is a permanent asset or a
        permanent liability. DLA tracks
        on-time delivery by CAGE code.
    </p>
</div>

<h2>Why Performance Matters</h2>

<div class="card-accent">
    <ul>
        <li>Higher pricing acceptance</li>
        <li>Faster responsibility
            determinations</li>
        <li>Better supplier relationships</li>
        <li>Word-of-mouth reputation</li>
        <li>Larger contract eligibility</li>
        <li>More margin tolerance</li>
    </ul>
</div>

<h2>What DLA Measures</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Metric</th>
                <th>Impact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>On-Time Delivery Rate</td>
                <td>Most heavily weighted</td>
            </tr>
            <tr>
                <td>Defect Rate</td>
                <td>Quality indicator</td>
            </tr>
            <tr>
                <td>Packaging Compliance</td>
                <td>Subset of defect rate</td>
            </tr>
            <tr>
                <td>Documentation Accuracy</td>
                <td>Admin performance</td>
            </tr>
            <tr>
                <td>Response Time</td>
                <td>Professionalism</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Building 100% On-Time Delivery</h2>

<div class="card-success">
    <h4>ON-TIME DELIVERY SYSTEM</h4>
    <ol>
        <li>Conservative bid timelines</li>
        <li>Immediate supplier orders</li>
        <li>Weekly supplier tracking</li>
        <li>Early production start</li>
        <li>Proactive DCMA scheduling</li>
        <li>3-5 day shipping buffer</li>
        <li>Tracking verification</li>
    </ol>
</div>

<h2>Handling Late Deliveries</h2>

<div class="card-warning">
    <h4>LATE DELIVERY PROTOCOL</h4>
    <ol>
        <li>Identify problem early</li>
        <li>Contact CO immediately</li>
        <li>Propose a solution</li>
        <li>Request contract mod if
            appropriate</li>
        <li>Document the situation</li>
        <li>Execute revised plan
            faithfully</li>
    </ol>
</div>

<div class="callout info">
    <p class="callout-title">
        Communication Earns Trust
    </p>
    <p class="callout-text">
        A contractor who proactively
        reports a potential delay
        builds relationship capital.
    </p>
</div>

<h2>Quality Management Systems</h2>

<div class="card">
    <h3>Inspection at Receiving</h3>
    <p>
        Verify NSN and part number,
        check quantity, verify
        condition, confirm drawing
        revision, verify material
        certifications.
    </p>
</div>

<div class="card">
    <h3>In-Process Quality Checks</h3>
    <p>
        Verify correct packaging,
        check MIL-STD-129 labeling,
        confirm QUP, verify required
        certifications.
    </p>
</div>

<h2>Rejection Recovery</h2>

<div class="card-warning">
    <ol>
        <li>Acknowledge promptly</li>
        <li>Request defect documentation</li>
        <li>Investigate root cause</li>
        <li>Propose corrective action</li>
        <li>Replace or rework</li>
        <li>Deliver expedited</li>
        <li>Update quality system</li>
    </ol>
</div>

<h2>Your Performance Actions</h2>

<div class="card-accent">
    <ol>
        <li>Conservative bid timelines</li>
        <li>Immediate supplier orders</li>
        <li>Weekly supplier tracking</li>
        <li>Three-checkpoint inspections</li>
        <li>Proactive CO communication</li>
        <li>Monthly metrics tracking</li>
        <li>Annual past performance
            verification</li>
    </ol>
</div>
  `;
}

function lesson_401_4(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 4
    </p>
    <h1>Common Rejections and How to
        Avoid Them</h1>
    <p class="lesson-intro">
        Rejections destroy profit. A
        single rejection on a $5,000
        contract can cost $3,000-5,000
        in direct costs plus past
        performance damage.
    </p>
</div>

<h2>The True Cost of Rejection</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Cost Component</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Original item (lost)</td>
                <td>$1,000-2,000</td>
            </tr>
            <tr>
                <td>Return shipping</td>
                <td>$200-500</td>
            </tr>
            <tr>
                <td>Replacement item</td>
                <td>$1,000-2,000</td>
            </tr>
            <tr>
                <td>New packaging</td>
                <td>$100-300</td>
            </tr>
            <tr>
                <td>Expedited shipping</td>
                <td>$300-800</td>
            </tr>
            <tr>
                <td>Administrative time</td>
                <td>$200-500</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$2,800-6,100+</strong></td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Top Rejection Causes</h2>

<div class="card-danger">
    <h3>Cause 1: Packaging Non-
        Conformance</h3>
    <p>
        Number one cause. Wrong container
        type, missing preservation,
        incorrect cushioning, improper
        marking.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 2: Wrong Item Delivered</h3>
    <p>
        Item does not match NSN or part
        number. Supplier sent wrong item
        and you did not catch it.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 3: Condition Not Met</h3>
    <p>
        Item arrives in used or surplus
        condition when new was required.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 4: Wrong Drawing Revision</h3>
    <p>
        Item conforms to older revision
        than contract requires.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 5: Shelf Life Problems</h3>
    <p>
        Insufficient remaining shelf
        life or manufacture date not
        documented.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 6: Country of Origin
        Violation</h3>
    <p>
        Item manufactured in country
        that violates TAA, Berry, or
        domestic requirements.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 7: Documentation Missing</h3>
    <p>
        CDRL items not delivered,
        certifications missing, C of C
        not included.
    </p>
</div>

<div class="card-danger">
    <h3>Cause 8: Quantity Discrepancy</h3>
    <p>
        Delivered quantity does not
        match contract.
    </p>
</div>

<h2>Three-Checkpoint System</h2>

<div class="card-success">
    <h4>CHECKPOINT 1: AT AWARD</h4>
    <ol>
        <li>Read every section</li>
        <li>Create CDRL checklist</li>
        <li>Create packaging summary</li>
        <li>Calculate delivery window</li>
    </ol>
</div>

<div class="card-success">
    <h4>CHECKPOINT 2: AT RECEIVING</h4>
    <ol>
        <li>Verify NSN and part number</li>
        <li>Count quantity</li>
        <li>Check condition</li>
        <li>Verify drawing revision</li>
        <li>Confirm country of origin</li>
        <li>Collect certifications</li>
    </ol>
</div>

<div class="card-success">
    <h4>CHECKPOINT 3: BEFORE SHIPMENT</h4>
    <ol>
        <li>Verify packaging compliance</li>
        <li>Check MIL-STD-129 labels</li>
        <li>Confirm CDRL documentation</li>
        <li>Match quantity shipped</li>
        <li>Confirm correct DoDAAC</li>
    </ol>
</div>

<h2>Your Rejection Prevention</h2>

<div class="card-accent">
    <ol>
        <li>Build written checklists</li>
        <li>Implement three-checkpoint
            inspection</li>
        <li>Photograph every shipment</li>
        <li>Track rejections by supplier
            and cause</li>
        <li>Root cause every rejection</li>
        <li>Replace problem suppliers</li>
        <li>Pre-shipment audits on
            high-value contracts</li>
    </ol>
</div>
  `;
}

function lesson_401_5(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 5
    </p>
    <h1>Scaling Your DLA Business</h1>
    <p class="lesson-intro">
        Growing from a few contracts a
        week to many requires different
        capabilities than starting up.
    </p>
</div>

<h2>Growth Plateaus</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Revenue</th>
                <th>Required Change</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$250K</td>
                <td>First part-time help</td>
            </tr>
            <tr>
                <td>$500K</td>
                <td>First full-time employee</td>
            </tr>
            <tr>
                <td>$1M</td>
                <td>Systems and process</td>
            </tr>
            <tr>
                <td>$2.5M</td>
                <td>Financing strategy</td>
            </tr>
            <tr>
                <td>$5M</td>
                <td>Middle management</td>
            </tr>
            <tr>
                <td>$10M+</td>
                <td>Specialized capabilities</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Solo Contractor Phase</h2>

<div class="card-accent">
    <h4>SOLO PHASE PRIORITIES</h4>
    <ul>
        <li>Build strong processes</li>
        <li>Keep operations lean</li>
        <li>Use contractors not employees</li>
        <li>Track time by activity</li>
        <li>Identify highest value</li>
        <li>Prepare to delegate</li>
    </ul>
</div>

<h2>First Employee Transition</h2>

<div class="card">
    <h3>What to Hire First</h3>
    <p>
        Operations support — someone
        who handles receiving,
        packaging, shipping. This frees
        you for bidding and customer
        relationships.
    </p>
</div>

<div class="card">
    <h3>What Not to Hire First</h3>
    <p>
        Do not hire a salesperson. Do
        not hire admin help. Volume at
        this stage does not justify
        either.
    </p>
</div>

<h2>Documented Procedures</h2>

<div class="card-success">
    <h4>ESSENTIAL PROCEDURES</h4>
    <ul>
        <li>Receiving Inspection</li>
        <li>Packaging per Section D</li>
        <li>MIL-STD-129 Labeling</li>
        <li>Pre-Shipment Verification</li>
        <li>WAWF Invoicing</li>
        <li>Contract Record Keeping</li>
    </ul>
</div>

<h2>The Cash Flow Gap</h2>

<div class="card-warning">
    <h4>TYPICAL CASH CYCLE</h4>
    <ul>
        <li>Day 0: order supplier</li>
        <li>Day 30: pay supplier</li>
        <li>Day 45: ship to DLA</li>
        <li>Day 50: government accepts</li>
        <li>Day 51: submit invoice</li>
        <li>Day 70-90: payment received</li>
    </ul>
    <p>
        Need $50-100K working capital
        for a $500K annual business.
    </p>
</div>

<h2>Financing Options</h2>

<div class="card">
    <ul>
        <li><strong>Bootstrapping</strong>
            — retained profits</li>
        <li><strong>SBA loans</strong> —
            favorable terms</li>
        <li><strong>Factoring</strong> —
            sell accepted invoices</li>
        <li><strong>Line of credit</strong>
            — bank line</li>
        <li><strong>Supply chain
            financing</strong> — finance
            supplier payments</li>
    </ul>
</div>

<h2>Systems Investment</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>System</th>
                <th>When to Invest</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Contract database</td>
                <td>20+ active contracts</td>
            </tr>
            <tr>
                <td>Inventory management</td>
                <td>When stocking items</td>
            </tr>
            <tr>
                <td>Accounting software</td>
                <td>Day one</td>
            </tr>
            <tr>
                <td>CRM</td>
                <td>Exceeds memory</td>
            </tr>
            <tr>
                <td>Document management</td>
                <td>Paper unmanageable</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Your Scaling Actions</h2>

<div class="card-accent">
    <ol>
        <li>Document before hiring</li>
        <li>Hire operations first</li>
        <li>Invest in systems at right
            revenue</li>
        <li>Secure working capital</li>
        <li>Track quality as volume
            grows</li>
        <li>Delegate with training</li>
        <li>Plan exit strategy</li>
    </ol>
</div>
  `;
}

function lesson_401_6(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · MODULE 6
    </p>
    <h1>When Things Go Wrong</h1>
    <p class="lesson-intro">
        Every experienced DLA contractor
        has contracts go wrong at some
        point. How you respond determines
        whether they become setbacks or
        existential threats.
    </p>
</div>

<h2>Types of Contract Problems</h2>

<div class="card-dark">
    <table>
        <thead>
            <tr>
                <th>Problem</th>
                <th>Urgency</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Supplier delay</td>
                <td>Immediate</td>
            </tr>
            <tr>
                <td>Quality issue</td>
                <td>Immediate</td>
            </tr>
            <tr>
                <td>Shipping loss</td>
                <td>Immediate</td>
            </tr>
            <tr>
                <td>Rejection</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Cure notice</td>
                <td>Critical</td>
            </tr>
            <tr>
                <td>Show cause notice</td>
                <td>Critical</td>
            </tr>
            <tr>
                <td>Default termination</td>
                <td>Existential</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Responding to Supplier Problems</h2>

<div class="card-success">
    <ol>
        <li>Identify problem early</li>
        <li>Contact supplier directly</li>
        <li>Evaluate options</li>
        <li>Decide your path</li>
        <li>Execute promptly</li>
        <li>Communicate with CO</li>
    </ol>
</div>

<h2>Cure Notices</h2>

<div class="callout danger">
    <p class="callout-title">
        Cure Notices Are Legal Documents
    </p>
    <p class="callout-text">
        A cure notice is a formal
        warning that you are failing
        to meet contract requirements.
        It is the first formal step
        toward potential termination.
    </p>
</div>

<div class="card">
    <h4>CURE NOTICE RESPONSE</h4>
    <ol>
        <li>Read carefully</li>
        <li>Respond in writing 24-48
            hours</li>
        <li>State plan to cure each
            issue</li>
        <li>Provide realistic timeline</li>
        <li>Execute aggressively</li>
        <li>Document all activities</li>
        <li>Confirm completion before
            deadline</li>
    </ol>
</div>

<h2>Show Cause Notices</h2>

<div class="card-danger">
    <h4>SHOW CAUSE RESPONSE</h4>
    <ol>
        <li>Respond in writing 24 hours</li>
        <li>Acknowledge severity</li>
        <li>Explain extenuating factors</li>
        <li>Detail corrective actions</li>
        <li>Provide guarantees</li>
        <li>Demonstrate capability</li>
        <li>Consider counsel if warranted</li>
    </ol>
</div>

<h2>Default Termination</h2>

<div class="card-danger">
    <h4>DEFAULT CONSEQUENCES</h4>
    <ul>
        <li>Reprocurement costs liable</li>
        <li>Past performance damage</li>
        <li>Potential CPARS negative</li>
        <li>Possible debarment</li>
        <li>Contract value loss</li>
        <li>Legal costs</li>
    </ul>
</div>

<h2>Shipping Problems</h2>

<div class="card">
    <h3>FOB Destination Loss</h3>
    <p>
        You bear the risk. File claim
        with carrier, produce
        replacement, expedite shipping
        if possible, document costs.
    </p>
</div>

<div class="card">
    <h3>FOB Origin Loss</h3>
    <p>
        Risk transferred to government.
        Notify CO, provide documentation,
        continue invoicing, assist with
        carrier claim.
    </p>
</div>

<h2>Insurance Considerations</h2>

<div class="card">
    <ul>
        <li>Cargo insurance</li>
        <li>Product liability</li>
        <li>Commercial general liability</li>
        <li>Bond coverage for larger
            contracts</li>
        <li>Errors and omissions</li>
    </ul>
</div>

<h2>Your Problem Management Actions</h2>

<div class="card-accent">
    <ol>
        <li>Weekly supplier tracking</li>
        <li>Develop counsel relationship</li>
        <li>Respond to formal notices
            within 24 hours</li>
        <li>Document all resolution
            actions</li>
        <li>Build appropriate insurance</li>
        <li>Study each problem to
            improve</li>
    </ol>
</div>
  `;
}

function lesson_401_cap(): string {
  return `
<div class="lesson-header">
    <p class="level-tag">
        LEVEL 401 · CAPSTONE
    </p>
    <h1>Master Project — Your Strategic
        Plan</h1>
    <p class="lesson-intro">
        You have completed the full
        curriculum. Now you create your
        personal strategic plan for
        building a profitable DLA
        contracting business.
    </p>
</div>

<h2>Your Deliverable</h2>

<div class="card-accent">
    <p>
        A written strategic plan covering:
    </p>
    <ol>
        <li>Business positioning</li>
        <li>Target FSC codes and NSNs</li>
        <li>Revenue goals by year</li>
        <li>Supplier development
            priorities</li>
        <li>Operational capabilities</li>
        <li>Certifications roadmap</li>
        <li>Scaling plan</li>
        <li>Risk management approach</li>
    </ol>
</div>

<h2>Section 1 — Positioning</h2>

<div class="card">
    <ul>
        <li>What specific product
            categories?</li>
        <li>Volume or specialty or niche?</li>
        <li>Unique value proposition?</li>
        <li>Your competitive advantage?</li>
        <li>Complexity level you'll tackle?</li>
        <li>Geographic scope?</li>
    </ul>
</div>

<h2>Section 2 — Target FSC/NSN</h2>

<div class="card">
    <ul>
        <li>Primary FSC codes with
            rationale</li>
        <li>Secondary expansion codes</li>
        <li>Specific recurring NSNs</li>
        <li>Current portfolio</li>
        <li>3-year target portfolio</li>
    </ul>
</div>

<h2>Section 3 — Revenue Goals</h2>

<div class="card-dark">
    <ul>
        <li>Year 1 target: $____</li>
        <li>Year 2 target: $____</li>
        <li>Year 3 target: $____</li>
        <li>Year 5 target: $____</li>
        <li>Year 10 target: $____</li>
    </ul>
</div>

<h2>Section 4 — Supplier Development</h2>

<div class="card">
    <ul>
        <li>Current suppliers assessed</li>
        <li>Target suppliers to add</li>
        <li>Direct manufacturer
            relationships</li>
        <li>Credit limits to establish</li>
        <li>Volume commitments</li>
    </ul>
</div>

<h2>Section 5 — Capabilities</h2>

<div class="card">
    <ul>
        <li>Packaging capabilities</li>
        <li>Inspection capabilities</li>
        <li>Storage and inventory</li>
        <li>Shipping capability</li>
        <li>Documentation systems</li>
        <li>Quality management</li>
    </ul>
</div>

<h2>Section 6 — Certifications</h2>

<div class="card">
    <ul>
        <li>JCP certification timeline</li>
        <li>CMMC level requirements</li>
        <li>Small business certifications</li>
        <li>Specialized (FDA, hazmat)</li>
        <li>Quality systems (ISO 9001)</li>
    </ul>
</div>

<h2>Section 7 — Scaling Plan</h2>

<div class="card">
    <ul>
        <li>First employee at $__</li>
        <li>Second employee at $__</li>
        <li>Dedicated facility at $__</li>
        <li>Management layer at $__</li>
        <li>Systems investment timeline</li>
        <li>Working capital plan</li>
    </ul>
</div>

<h2>Section 8 — Risk Management</h2>

<div class="card">
    <ul>
        <li>Supplier concentration</li>
        <li>Customer concentration</li>
        <li>Compliance risks</li>
        <li>Cash flow risks</li>
        <li>Competitive risks</li>
        <li>Personal capacity risks</li>
        <li>Insurance and legal plans</li>
    </ul>
</div>

<h2>Using Your Plan</h2>

<div class="card-success">
    <ul>
        <li>Review monthly for progress</li>
        <li>Update quarterly</li>
        <li>Reference for strategic
            decisions</li>
        <li>Filter new opportunities</li>
        <li>Share with accountant</li>
        <li>Use for financing
            conversations</li>
    </ul>
</div>

<h2>What You Have Accomplished</h2>

<div class="card-accent">
    <ul>
        <li>Navigate DIBBS fluently</li>
        <li>Read any DLA solicitation</li>
        <li>Identify red flags</li>
        <li>Analyze procurement history</li>
        <li>Handle compliance</li>
        <li>Source strategically</li>
        <li>Price profitably</li>
        <li>Manage delivery performance</li>
        <li>Prevent rejections</li>
        <li>Scale operations</li>
        <li>Handle contract problems</li>
        <li>Build strategic long-term
            business</li>
    </ul>
</div>

<div class="callout success">
    <p class="callout-title">
        Congratulations
    </p>
    <p class="callout-text">
        You have completed the
        Solicitation 101-401 curriculum.
        The contractors who succeed are
        those who apply what they learn
        systematically. You have the
        knowledge. Now build the
        business.
    </p>
</div>
  `;
}

// ── LESSON HANDLERS MAP ───────────────────────

const LESSON_HANDLERS: Record<
  string,
  () => string
> = {
  "101_1": lesson_101_1,
  "101_2": lesson_101_2,
  "101_3": lesson_101_3,
  "101_4": lesson_101_4,
  "101_cap": lesson_101_cap,
  "201_1": lesson_201_1,
  "201_2": lesson_201_2,
  "201_3": lesson_201_3,
  "201_4": lesson_201_4,
  "201_5": lesson_201_5,
  "201_6": lesson_201_6,
  "201_7": lesson_201_7,
  "201_8": lesson_201_8,
  "201_9": lesson_201_9,
  "201_10": lesson_201_10,
  "201_cap": lesson_201_cap,
  "301_1": lesson_301_1,
  "301_2": lesson_301_2,
  "301_3": lesson_301_3,
  "301_4": lesson_301_4,
  "301_5": lesson_301_5,
  "301_6": lesson_301_6,
  "301_7": lesson_301_7,
  "301_cap": lesson_301_cap,
  "401_1": lesson_401_1,
  "401_2": lesson_401_2,
  "401_3": lesson_401_3,
  "401_4": lesson_401_4,
  "401_5": lesson_401_5,
  "401_6": lesson_401_6,
  "401_cap": lesson_401_cap,
};

// ── Placeholder ──────────────────────────────

function placeholderLesson(
  moduleId: string
): string {
  const level = moduleId.split("_")[0];
  return `
    <div class="lesson-header">
      <p class="level-tag">LEVEL ${level}</p>
      <h1>Module Coming Soon</h1>
      <p class="lesson-intro">
        This lesson is being finalized.
        Use the AI Tutor on the right to ask
        questions about this topic now.
      </p>
    </div>
    <div class="callout info">
      <p class="callout-title">Use the AI Tutor</p>
      <p class="callout-text">
        The AI Tutor panel on the right can
        teach you about any aspect of DLA DIBBS
        contracting right now.
      </p>
    </div>
  `;
}