import React from 'react';

export const Background: React.FC = () => {
	return (
		<div className="relative">
			<div className="fixed inset-0 w-full h-auto from-[#182034] to-[#0a1329] bg-gradient-to-tl"></div>
			<div className="fixed  inset-0 w-full h-auto bg-position scale-[400%] translate-y-[-300px]">
				<div className="bg-animation animate-spin-slow">
					<svg
						width="800"
						height="800"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						viewBox="0 0 800 800"
					>
						<defs>
							<linearGradient
								id="ccchaos-grad"
								x1="50%"
								y1="0%"
								x2="50%"
								y2="100%"
							>
								<stop
									stop-color="hsl(206, 75%, 49%)"
									stop-opacity="1"
									offset="0%"
								></stop>
								<stop
									stop-color="hsl(331, 90%, 56%)"
									stop-opacity="1"
									offset="100%"
								></stop>
							</linearGradient>
						</defs>
						<g
							stroke-width="2"
							stroke="url(#ccchaos-grad)"
							fill="none"
							stroke-linecap="round"
						>
							<path
								d="M399.92 128.56C408.65 129.31 417.29 131 425.81 133.55 434.33 136.55 442.74 140.29 451.01 144.67 459.28 149.28 467.41 154.4 475.38 159.91 483.36 165.42 491.17 171.19 498.8 177.13 506.43 182.89 513.87 188.72 521.11 194.57 528.35 200.11 535.38 205.62 542.18 211.08 548.97 216.18 555.53 221.23 561.83 226.25 568.11 230.91 574.14 235.59 579.88 240.29 585.61 244.7 591.05 249.21 596.18 253.84 601.3 258.25 606.1 262.85 610.57 267.66 615.02 272.33 619.14 277.26 622.9 282.48 626.66 287.62 630.07 293.07 633.11 298.85 636.16 304.59 638.84 310.68 641.16 317.11 643.48 323.51 645.44 330.27 647.02 337.38 648.62 344.47 649.85 351.91 650.69 359.71 651.56 367.49 652.04 375.62 652.11 384.11 652.21 392.6 651.89 401.26 651.16 410.07 650.46 418.9 649.34 427.91 647.83 437.07 646.31 446.28 644.39 455.68 642.08 465.25 639.75 474.89 637.03 484.71 633.93 494.7 630.81 504.76 627.31 514.99 623.45 525.33 619.56 535.7 615.32 546.14 610.74 556.59 606.15 566.97 601.22 577.25 595.99 587.32 590.75 597.17 585.2 606.66 579.37 615.65 573.54 624.19 567.44 632.05 561.09 639.07 554.73 645.43 548.13 650.77 541.31 654.97 534.49 658.35 527.44 660.48 520.2 661.32 512.95 661.31 505.51 660.05 497.89 657.57 490.27 654.48 482.47 650.38 474.51 645.42 466.55 640.33 458.44 634.75 450.18 628.91 441.92 623.56 433.53 618.39 425.01 613.64 416.5 609.98 407.87 607.1 399.13 605.15 390.4 604.65 381.78 605.19 373.28 606.69 364.78 609.49 356.42 612.99 348.2 617 339.99 621.83 331.93 626.76 324.04 631.58 316.16 636.61 308.45 641.11 300.93 644.92 293.42 648.4 286.1 650.88 279.01 652.28 271.91 653.02 265.04 652.55 258.4 650.88 251.77 648.43 245.37 644.8 239.23 640.08 233.08 634.66 227.2 628.28 221.58 621.06 215.96 613.31 210.61 604.9 205.54 595.96 200.46 586.69 195.66 577.05 191.16 567.17 186.65 557.12 182.43 546.95 178.52 536.73 174.59 526.48 170.98 516.25 167.7 506.12 164.4 496.02 161.43 486.03 158.83 476.21 156.21 466.43 153.96 456.81 152.11 447.38 150.25 437.99 148.8 428.77 147.78 419.75 146.77 410.74 146.21 401.92 146.11 393.29 146.04 384.66 146.44 376.41 147.3 368.54 148.19 360.66 149.53 353.15 151.3 346 153.09 338.82 155.3 331.99 157.9 325.51 160.52 318.98 163.52 312.79 166.87 306.91 170.23 300.96 173.94 295.29 177.97 289.9 181.99 284.39 186.34 279.11 190.98 274.03 195.61 268.77 200.53 263.66 205.73 258.67 210.91 253.43 216.37 248.26 222.09 243.12 227.79 237.68 233.75 232.22 239.96 226.75 246.16 220.93 252.6 215.08 259.27 209.19 265.93 202.99 272.82 196.79 279.92 190.62 287.02 184.23 294.33 177.94 301.84 171.83 309.34 165.66 317.04 159.79 324.91 154.31 332.78 148.97 340.83 144.16 349.03 139.98 357.23 136.15 365.58 133.09 374.07 130.86 382.55 129.15 391.17 128.37 399.91 128.56"
								stroke-dasharray="0 0"
								transform="rotate(0, 400, 400)"
								opacity="0.05"
							></path>
							<path
								d="M400.14 138.92C408.5 139.65 416.76 141.28 424.91 143.73 433.06 146.6 441.11 150.19 449.02 154.41 456.92 158.86 464.7 163.81 472.33 169.16 479.95 174.54 487.42 180.2 494.71 186.05 502 191.75 509.12 197.56 516.03 203.41 522.95 208.99 529.66 214.57 536.15 220.12 542.63 225.35 548.88 230.54 554.89 235.7 560.89 240.53 566.64 245.36 572.11 250.21 577.57 254.77 582.76 259.4 587.65 264.13 592.52 268.63 597.1 273.28 601.36 278.1 605.61 282.77 609.54 287.66 613.13 292.8 616.72 297.84 619.98 303.15 622.89 308.77 625.8 314.32 628.38 320.19 630.59 326.38 632.82 332.54 634.7 339.04 636.22 345.87 637.76 352.68 638.94 359.85 639.75 367.36 640.58 374.85 641.04 382.71 641.11 390.93 641.2 399.15 640.89 407.56 640.2 416.13 639.52 424.71 638.45 433.48 637 442.42 635.55 451.39 633.72 460.53 631.51 469.84 629.29 479.19 626.7 488.7 623.74 498.35 620.77 508.02 617.43 517.81 613.75 527.65 610.05 537.48 606.01 547.31 601.65 557.07 597.27 566.71 592.58 576.18 587.59 585.37 582.59 594.29 577.29 602.8 571.73 610.76 566.17 618.27 560.34 625.08 554.26 631.05 548.19 636.4 541.88 640.77 535.35 644.07 528.82 646.63 522.08 648.06 515.15 648.31 508.21 647.85 501.09 646.28 493.79 643.63 486.49 640.5 479.03 636.52 471.41 631.8 463.79 627.02 456.02 621.85 448.12 616.48 440.21 611.59 432.18 606.88 424.03 602.56 415.89 599.23 407.62 596.6 399.27 594.79 390.92 594.29 382.67 594.7 374.55 595.97 366.42 598.42 358.42 601.5 350.57 605.05 342.72 609.38 335.02 613.83 327.48 618.22 319.94 622.86 312.57 627.09 305.39 630.73 298.21 634.16 291.22 636.75 284.44 638.39 277.66 639.5 271.09 639.55 264.74 638.51 258.39 636.81 252.27 634.03 246.39 630.24 240.51 625.81 234.87 620.45 229.49 614.27 224.1 607.59 218.97 600.22 214.11 592.29 209.24 584.01 204.63 575.31 200.31 566.3 195.97 557.1 191.92 547.69 188.17 538.17 184.4 528.58 180.93 518.95 177.78 509.35 174.61 499.74 171.77 490.2 169.27 480.78 166.76 471.38 164.61 462.11 162.84 453 161.06 443.92 159.68 434.99 158.7 426.25 157.74 417.53 157.2 408.97 157.11 400.61 157.04 392.25 157.43 384.26 158.24 376.64 159.09 369 160.37 361.72 162.05 354.79 163.76 347.82 165.86 341.18 168.35 334.87 170.84 328.5 173.71 322.43 176.92 316.65 180.13 310.78 183.68 305.16 187.54 299.78 191.4 294.27 195.56 288.95 200.01 283.8 204.45 278.46 209.18 273.23 214.16 268.11 219.14 262.74 224.38 257.41 229.87 252.11 235.34 246.52 241.06 240.91 247.02 235.29 252.96 229.37 259.14 223.43 265.53 217.47 271.92 211.24 278.52 205.04 285.32 198.89 292.12 192.58 299.12 186.39 306.31 180.41 313.49 174.41 320.86 168.71 328.39 163.42 335.92 158.29 343.62 153.69 351.46 149.7 359.31 146.06 367.3 143.15 375.42 141.06 383.54 139.45 391.78 138.72 400.13 138.92"
								stroke-dasharray="0 0"
								transform="rotate(1.6818181818181819, 400, 400)"
								opacity="0.09"
							></path>
							<path
								d="M400.37 149.28C408.34 149.99 416.22 151.55 424.01 153.89 431.79 156.63 439.46 160.07 447.01 164.11 454.55 168.39 461.97 173.16 469.25 178.33 476.52 183.56 483.64 189.08 490.59 194.8 497.55 200.43 504.33 206.18 510.92 212 517.51 217.59 523.9 223.21 530.08 228.82 536.25 234.14 542.21 239.45 547.92 244.73 553.63 249.71 559.1 254.69 564.31 259.68 569.51 264.39 574.44 269.16 579.09 274 583.73 278.61 588.09 283.34 592.14 288.22 596.18 292.93 599.93 297.83 603.35 302.93 606.78 307.93 609.89 313.17 612.66 318.67 615.45 324.09 617.91 329.81 620.03 335.82 622.16 341.78 623.97 348.07 625.42 354.67 626.9 361.25 628.03 368.16 628.8 375.41 629.6 382.65 630.04 390.24 630.11 398.19 630.2 406.14 629.9 414.27 629.24 422.57 628.59 430.87 627.57 439.36 626.18 448 624.8 456.66 623.05 465.49 620.94 474.44 618.83 483.42 616.36 492.53 613.55 501.71 610.72 510.91 607.54 520.16 604.05 529.4 600.53 538.59 596.69 547.72 592.54 556.71 588.38 565.55 583.91 574.15 579.16 582.41 574.4 590.39 569.37 597.91 564.07 604.85 558.77 611.36 553.21 617.16 547.43 622.14 541.63 626.55 535.61 630.04 529.39 632.54 523.16 634.39 516.72 635.21 510.1 634.98 503.48 634.16 496.68 632.36 489.71 629.63 482.74 626.53 475.61 622.69 468.33 618.24 461.05 613.8 453.63 609.04 446.08 604.12 438.54 599.69 430.86 595.42 423.09 591.5 415.31 588.5 407.42 586.1 399.45 584.42 391.47 583.93 383.6 584.23 375.85 585.28 368.1 587.4 360.47 590.09 352.98 593.2 345.49 597.05 338.14 601.03 330.95 604.99 323.76 609.23 316.73 613.15 309.88 616.59 303.03 619.91 296.36 622.51 289.89 624.31 283.41 625.7 277.14 626.15 271.08 625.64 265.02 624.58 259.17 622.54 253.55 619.57 247.93 616.03 242.54 611.62 237.39 606.42 232.23 600.75 227.32 594.39 222.66 587.45 218 580.17 213.58 572.42 209.45 564.32 205.29 556 201.4 547.41 197.81 538.66 194.19 529.8 190.87 520.84 187.85 511.85 184.82 502.83 182.1 493.82 179.71 484.88 177.32 475.94 175.26 467.09 173.57 458.37 171.87 449.66 170.55 441.08 169.62 432.66 168.71 424.25 168.2 415.99 168.11 407.91 168.04 399.82 168.41 392.09 169.19 384.7 169.99 377.3 171.2 370.22 172.8 363.47 174.43 356.69 176.43 350.2 178.8 344.01 181.17 337.76 183.91 331.78 186.97 326.04 190.03 320.22 193.42 314.61 197.11 309.2 200.8 303.66 204.78 298.27 209.04 293.02 213.29 287.59 217.81 282.24 222.59 276.97 227.35 271.47 232.37 266 237.62 260.55 242.87 254.84 248.35 249.12 254.05 243.38 259.74 237.39 265.65 231.39 271.77 225.4 277.88 219.19 284.19 213.02 290.7 206.94 297.2 200.73 303.89 194.69 310.76 188.86 317.62 183.05 324.66 177.56 331.86 172.48 339.05 167.57 346.4 163.18 353.89 159.4 361.38 155.95 369.01 153.21 376.76 151.25 384.51 149.74 392.38 149.07 400.36 149.28"
								stroke-dasharray="0 0"
								transform="rotate(3.3636363636363638, 400, 400)"
								opacity="0.14"
							></path>
							<path
								d="M400.57 159.64C408.16 160.33 415.67 161.81 423.08 164.05 430.49 166.66 437.79 169.93 444.98 173.78 452.16 177.88 459.22 182.45 466.14 187.42 473.06 192.48 479.84 197.83 486.45 203.41 493.06 208.92 499.51 214.58 505.78 220.33 512.04 225.91 518.11 231.52 523.98 237.15 529.85 242.54 535.5 247.93 540.93 253.3 546.35 258.41 551.54 263.51 556.49 268.62 561.42 273.48 566.1 278.38 570.52 283.33 574.92 288.07 579.06 292.91 582.91 297.85 586.76 302.63 590.32 307.57 593.58 312.68 596.83 317.67 599.79 322.87 602.44 328.3 605.1 333.65 607.44 339.26 609.47 345.13 611.51 350.95 613.23 357.06 614.62 363.46 616.03 369.84 617.12 376.53 617.86 383.54 618.62 390.54 619.05 397.87 619.11 405.53 619.19 413.2 618.91 421.04 618.28 429.03 617.66 437.02 616.68 445.18 615.36 453.46 614.04 461.76 612.37 470.19 610.37 478.71 608.36 487.24 606.02 495.86 603.34 504.51 600.66 513.13 597.65 521.76 594.33 530.33 590.99 538.82 587.35 547.18 583.42 555.34 579.47 563.34 575.23 571.04 570.72 578.37 566.21 585.4 561.42 591.95 556.39 597.91 551.36 603.46 546.08 608.31 540.58 612.39 535.07 615.95 529.34 618.66 523.42 620.45 517.49 621.69 511.36 622.01 505.06 621.39 498.76 620.3 492.28 618.35 485.64 615.6 479 612.58 472.2 608.94 465.27 604.78 458.34 600.69 451.27 596.34 444.08 591.87 436.89 587.86 429.58 584.03 422.17 580.49 414.76 577.79 407.25 575.61 399.65 574.06 392.06 573.57 384.56 573.77 377.18 574.62 369.8 576.44 362.53 578.76 355.4 581.46 348.27 584.84 341.27 588.37 334.43 591.9 327.58 595.74 320.89 599.32 314.37 602.52 307.85 605.68 301.49 608.23 295.33 610.11 286.17 612.05 268.84 611.11 260.69 608.14 255.33 605.4 250.18 601.84 245.27 597.54 240.34 592.8 235.65 587.4 231.2 581.41 226.74 575.1 222.52 568.3 218.56 561.1 214.59 553.68 210.87 545.96 207.43 538 203.98 529.93 200.8 521.7 197.92 513.38 195.03 505.01 192.43 496.59 190.15 488.2 187.87 479.79 185.91 471.42 184.3 463.14 182.69 454.86 181.43 446.67 180.55 438.6 179.68 430.55 179.19 422.61 179.11 414.82 179.05 407.03 179.39 399.55 180.13 392.39 180.89 385.21 182.04 378.33 183.56 371.74 185.1 365.12 187 358.76 189.25 352.66 191.51 346.5 194.1 340.57 197.02 334.86 199.93 329.05 203.16 323.43 206.68 317.97 210.19 312.38 213.99 306.92 218.05 301.57 222.11 296.04 226.42 290.58 230.99 285.18 235.54 279.57 240.33 273.99 245.35 268.41 250.36 262.61 255.6 256.81 261.04 251 266.48 244.98 272.13 238.97 277.97 232.99 283.8 226.83 289.83 220.75 296.04 214.77 302.24 208.71 308.63 202.83 315.18 197.2 321.72 191.6 328.43 186.34 335.29 181.49 342.15 176.82 349.16 172.66 356.29 169.09 363.43 165.85 370.7 163.27 378.08 161.44 385.47 160.03 392.96 159.42 400.56 159.64"
								stroke-dasharray="0 0"
								transform="rotate(5.045454545454545, 400, 400)"
								opacity="0.18"
							></path>
							<path
								d="M400.74 170C407.95 170.66 415.09 172.08 422.12 174.19 429.16 176.67 436.09 179.77 442.91 183.43 449.73 187.33 456.43 191.69 463 196.45 469.57 201.31 476 206.47 482.27 211.87 488.54 217.24 494.65 222.77 500.59 228.42 506.53 233.93 512.28 239.51 517.85 245.12 523.4 250.54 528.76 255.97 533.9 261.39 539.04 266.59 543.95 271.79 548.63 277 553.31 281.99 557.74 287.01 561.93 292.06 566.1 296.92 570.02 301.85 573.67 306.88 577.32 311.74 580.7 316.73 583.79 321.87 586.89 326.88 589.7 332.08 592.22 337.46 594.75 342.77 596.98 348.29 598.91 354.05 600.86 359.76 602.5 365.72 603.83 371.95 605.17 378.15 606.21 384.64 606.92 391.41 607.65 398.17 608.05 405.24 608.11 412.61 608.19 419.98 607.92 427.5 607.31 435.14 606.72 442.79 605.79 450.57 604.54 458.44 603.28 466.32 601.7 474.29 599.8 482.32 597.9 490.34 595.67 498.39 593.14 506.43 590.6 514.43 587.74 522.38 584.6 530.21 581.45 537.95 578 545.51 574.27 552.82 570.54 559.95 566.53 566.76 562.26 573.16 557.98 579.27 553.46 584.89 548.69 589.92 543.92 594.58 538.92 598.57 533.7 601.83 525.77 605.64 508.9 608.54 500.01 607.58 494.02 606.3 487.87 604.28 481.56 601.57 475.26 598.68 468.8 595.27 462.22 591.42 455.63 587.68 448.91 583.74 442.08 579.71 435.25 576.12 428.3 572.68 421.26 569.51 414.22 567.09 407.09 565.13 399.87 563.7 392.66 563.22 385.54 563.33 378.53 564 371.52 565.53 364.61 567.51 357.84 569.82 351.07 572.77 344.42 575.85 337.92 578.96 331.42 582.4 325.06 585.63 318.86 588.55 312.66 591.5 306.63 593.95 300.77 595.82 292.06 597.97 275.57 598.13 267.82 596.02 262.71 593.97 257.81 591.16 253.12 587.66 248.43 583.78 243.96 579.26 239.71 574.17 235.46 568.77 231.44 562.88 227.66 556.57 223.87 550.04 220.33 543.18 217.05 536.04 213.76 528.77 210.73 521.3 207.99 513.7 205.23 506.02 202.76 498.25 200.59 490.45 198.42 482.62 196.56 474.78 195.03 466.98 193.5 459.18 192.31 451.43 191.47 443.75 190.65 436.08 190.19 428.5 190.11 421.02 190.05 413.54 190.38 406.33 191.07 399.4 191.79 392.45 192.88 385.76 194.32 379.32 195.78 372.85 197.58 366.61 199.71 360.59 201.85 354.51 204.31 348.62 207.07 342.92 209.84 337.12 212.9 331.48 216.24 325.97 219.58 320.33 223.2 314.8 227.06 309.35 230.92 303.75 235.03 298.2 239.38 292.69 243.71 287 248.28 281.33 253.06 275.67 257.84 269.82 262.83 263.98 268.01 258.15 273.19 252.15 278.57 246.17 284.14 240.24 289.69 234.19 295.44 228.23 301.35 222.4 307.25 216.53 313.33 210.85 319.56 205.43 325.79 200.08 332.17 195.07 338.7 190.46 345.22 186.05 351.88 182.13 358.67 178.77 365.45 175.73 372.36 173.33 379.38 171.63 386.39 170.33 393.51 169.77 400.73 170"
								stroke-dasharray="0 0"
								transform="rotate(6.7272727272727275, 400, 400)"
								opacity="0.22"
							></path>
							<path
								d="M400.87 180.36C407.7 180.99 414.46 182.33 421.12 184.33 427.79 186.67 434.36 189.59 440.81 193.05 447.27 196.74 453.61 200.88 459.82 205.41 466.03 210.05 472.12 215 478.05 220.2 483.98 225.39 489.76 230.77 495.37 236.28 500.98 241.69 506.42 247.19 511.68 252.74 516.93 258.13 521.99 263.55 526.85 268.99 531.7 274.24 536.34 279.5 540.76 284.77 545.18 289.85 549.37 294.96 553.32 300.09 557.27 305.06 560.98 310.08 564.43 315.17 567.88 320.11 571.08 325.16 574.01 330.32 576.95 335.37 579.61 340.57 582 345.92 584.4 351.2 586.52 356.66 588.36 362.33 590.21 367.94 591.77 373.77 593.03 379.84 594.31 385.87 595.3 392.16 595.97 398.69 596.67 405.22 597.05 412.01 597.11 419.08 597.18 426.14 596.93 433.31 596.35 440.58 595.79 447.85 594.91 455.2 593.71 462.62 592.53 470.04 591.03 477.5 589.23 484.98 587.43 492.43 585.32 499.88 582.93 507.26 580.53 514.59 577.83 521.82 574.86 528.88 571.89 535.84 568.63 542.59 565.12 549.05 561.59 555.33 557.81 561.26 553.78 566.76 549.74 572.01 545.47 576.75 540.97 580.93 534.1 586.38 519.31 593.39 511.42 594.81 503.35 594.93 486.36 591.21 477.48 587.58 471.51 584.86 465.4 581.7 459.16 578.18 452.92 574.8 446.56 571.25 440.09 567.64 433.62 564.45 427.04 561.39 420.37 558.57 413.7 556.42 406.94 554.65 400.1 553.34 393.27 552.86 386.52 552.89 379.88 553.4 373.24 554.68 366.7 556.33 360.28 558.29 353.86 560.82 347.56 563.49 341.4 566.19 335.24 569.22 329.21 572.09 323.34 574.72 314.6 578.57 297.93 583.76 290.01 584.76 282.28 584.72 267.73 580.75 260.95 576.87 256.49 573.75 252.24 570.02 248.21 565.75 244.16 561.2 240.34 556.16 236.75 550.7 233.14 545.04 229.78 539.01 226.66 532.68 223.53 526.22 220.65 519.52 218.05 512.64 215.43 505.68 213.09 498.59 211.03 491.41 208.97 484.19 207.21 476.93 205.76 469.64 204.31 462.35 203.19 455.07 202.4 447.81 201.62 440.56 201.18 433.35 201.11 426.2 201.05 419.05 201.36 412.13 202.02 405.43 202.7 398.73 203.72 392.23 205.08 385.94 206.45 379.63 208.15 373.5 210.16 367.56 212.18 361.56 214.51 355.72 217.12 350.02 219.74 344.25 222.64 338.59 225.81 333.04 228.97 327.38 232.4 321.8 236.06 316.28 239.72 310.63 243.63 305.02 247.75 299.45 251.87 293.72 256.2 288.01 260.75 282.32 265.28 276.47 270.02 270.64 274.95 264.84 279.87 258.9 284.98 253.01 290.27 247.19 295.54 241.28 301 235.49 306.61 229.85 312.22 224.2 317.99 218.76 323.9 213.58 329.81 208.5 335.87 203.75 342.06 199.4 348.24 195.26 354.56 191.58 361 188.45 367.43 185.62 373.98 183.39 380.63 181.82 387.28 180.63 394.03 180.13 400.86 180.36"
								stroke-dasharray="0 0"
								transform="rotate(8.409090909090908, 400, 400)"
								opacity="0.27"
							></path>
							<path
								d="M400.96 190.72C407.41 191.33 413.79 192.59 420.08 194.47 426.37 196.66 432.57 199.4 438.66 202.65 444.75 206.13 450.74 210.04 456.6 214.32 462.45 218.73 468.19 223.44 473.78 228.41 479.37 233.4 484.82 238.58 490.11 243.91 495.39 249.18 500.52 254.55 505.47 260 510.42 265.33 515.18 270.7 519.76 276.1 524.33 281.36 528.7 286.63 532.87 291.92 537.03 297.05 540.98 302.21 544.71 307.39 548.43 312.42 551.93 317.51 555.18 322.64 558.44 327.65 561.46 332.73 564.23 337.91 568.27 345.59 575.06 361.46 577.81 369.73 579.56 375.25 581.04 380.96 582.24 386.85 583.46 392.72 584.39 398.8 585.03 405.1 585.69 411.38 586.05 417.89 586.11 424.62 586.18 431.36 585.93 438.16 585.39 445.02 584.86 451.87 584.02 458.78 582.89 465.7 581.77 472.62 580.35 479.54 578.65 486.42 576.95 493.28 574.97 500.09 572.71 506.78 570.45 513.42 567.91 519.91 565.12 526.21 562.31 532.39 559.25 538.33 555.94 543.96 552.62 549.42 549.06 554.52 545.27 559.18 539.46 565.59 526.75 575.36 519.88 578.54 512.82 580.61 497.78 581.09 489.85 579.54 484.51 578.1 479.01 576.12 473.38 573.65 467.75 571.13 461.98 568.24 456.09 565.06 450.2 562.03 444.19 558.88 438.08 555.67 431.97 552.86 425.76 550.16 419.46 547.66 413.16 545.76 406.78 544.18 400.33 542.98 393.87 542.52 387.5 542.47 381.22 542.84 374.95 543.88 368.77 545.24 362.71 546.86 356.65 549.01 350.7 551.27 344.88 553.58 339.05 556.21 333.36 558.72 327.8 561.04 319.54 564.52 303.77 569.47 296.28 570.63 288.96 570.96 275.19 568.27 268.76 565.25 262.52 561.27 251.03 550.3 245.82 543.5 242.4 538.64 239.21 533.41 236.26 527.86 233.29 522.19 230.57 516.24 228.1 510.08 225.63 503.85 223.41 497.43 221.47 490.89 219.53 484.31 217.86 477.63 216.49 470.89 215.13 464.14 214.07 457.35 213.32 450.54 212.59 443.73 212.18 436.92 212.11 430.13 212.05 423.33 212.34 416.71 212.96 410.26 213.6 403.81 214.56 397.52 215.84 391.4 217.13 385.26 218.73 379.26 220.62 373.41 222.53 367.51 224.72 361.73 227.18 356.06 229.65 350.33 232.39 344.68 235.37 339.12 238.36 333.47 241.59 327.87 245.06 322.32 248.52 316.67 252.21 311.04 256.11 305.45 260.01 299.73 264.11 294.03 268.41 288.36 272.71 282.57 277.19 276.8 281.86 271.08 286.52 265.26 291.36 259.51 296.36 253.85 301.36 248.14 306.52 242.55 311.84 237.14 317.15 231.74 322.6 226.56 328.2 221.66 333.79 216.86 339.52 212.4 345.38 208.33 351.23 204.45 357.2 201.04 363.28 198.13 369.36 195.51 375.55 193.46 381.83 192.02 388.12 190.93 394.49 190.48 400.95 190.72"
								stroke-dasharray="0 0"
								transform="rotate(10.09090909090909, 400, 400)"
								opacity="0.31"
							></path>
							<path
								d="M400.99 201.08C407.07 201.66 413.07 202.84 418.99 204.6 424.91 206.64 430.74 209.2 436.46 212.24 447.92 218.93 458.96 227.15 469.47 236.51 479.97 246.04 489.94 256.28 499.23 266.93 508.52 277.25 517.13 287.8 524.96 298.44 532.78 308.56 539.8 318.83 545.94 329.22 552.07 339.18 557.32 349.44 561.58 360.05 565.87 370.41 569.2 381.3 571.45 392.76 572.6 398.46 573.49 404.33 574.09 410.36 574.71 416.39 575.06 422.6 575.11 428.98 575.17 435.37 574.94 441.78 574.43 448.2 573.93 454.63 573.14 461.05 572.07 467.45 569.96 480.22 566.73 492.8 562.49 504.88 558.24 516.69 552.95 527.71 546.75 537.56 540.52 546.77 533.38 554.42 525.44 560.13 517.48 564.87 508.73 567.44 499.33 567.69 489.91 567.06 479.84 564.35 469.26 559.81 458.66 555.27 447.56 549.75 436.06 543.8 430.31 541.35 424.47 538.99 418.54 536.78 412.62 535.12 406.61 533.71 400.53 532.62 394.46 532.17 388.46 532.07 382.55 532.3 376.64 533.13 370.83 534.22 365.12 535.53 353.7 539.54 342.7 543.73 332.24 547.55 321.77 551.91 311.82 554.98 302.52 556.4 293.19 557.32 284.5 556.16 276.54 552.92 268.55 548.86 261.29 542.81 254.87 535.04 248.42 526.63 242.8 516.83 238.15 505.99 233.49 494.84 229.8 482.94 227.23 470.59 225.94 464.39 224.95 458.1 224.25 451.76 223.56 445.41 223.17 439.02 223.11 432.59 223.06 426.17 223.33 419.87 223.91 413.7 224.5 407.52 225.41 401.47 226.6 395.53 229.04 383.61 232.63 372.08 237.24 360.93 241.88 349.56 247.53 338.39 254.05 327.44 260.57 316.13 267.95 304.9 276.06 293.81 284.15 282.38 292.98 271.12 302.42 260.25 311.85 249.3 321.9 238.99 332.45 229.68 343 220.84 354.06 213.41 365.52 207.81 371.24 205.41 377.07 203.53 382.99 202.22 388.91 201.23 394.91 200.84 400.98 201.08"
								stroke-dasharray="0 0"
								transform="rotate(11.772727272727273, 400, 400)"
								opacity="0.35"
							></path>
							<path
								d="M400.98 211.44C412.37 212.83 423.48 216.39 434.21 221.81 444.94 228.03 455.28 235.72 465.12 244.52 474.94 253.55 484.26 263.32 492.96 273.56 501.65 283.58 509.71 293.89 517.04 304.33 524.35 314.38 530.94 324.58 536.69 334.88 542.44 344.83 547.37 355.02 551.37 365.46 555.41 375.69 558.54 386.33 560.67 397.4 562.84 408.39 564.02 419.92 564.11 431.94 564.24 443.97 563.26 455.95 561.25 467.7 559.27 479.39 556.24 490.73 552.27 501.45 548.29 511.91 543.35 521.49 537.55 529.86 531.73 537.68 525.06 543.98 517.64 548.49 510.2 552.21 502.02 554 493.23 553.76 484.42 552.89 475 550.26 465.09 546.09 455.18 542.06 444.78 537.22 434.01 532.03 423.24 528.16 412.1 524.78 400.71 522.26 389.32 521.95 378.21 522.7 367.5 524.31 356.79 527.61 346.47 531.07 336.64 534.25 326.81 538.03 317.47 540.76 308.72 542.13 299.96 543.21 291.78 542.51 284.29 540 276.78 536.87 269.95 531.94 263.91 525.4 257.85 518.33 252.57 509.89 248.21 500.36 243.83 490.55 240.37 479.9 237.96 468.65 235.57 457.33 234.24 445.55 234.11 433.49 234.02 421.43 235.15 409.66 237.37 398.24 239.64 386.76 242.99 375.54 247.31 364.59 251.65 353.47 256.94 342.48 263.05 331.66 269.16 320.57 276.08 309.56 283.69 298.73 291.3 287.66 299.59 276.83 308.46 266.43 317.31 256.06 326.75 246.36 336.66 237.67 346.57 229.46 356.95 222.63 367.7 217.51 378.45 213.37 389.58 211.27 400.97 211.44"
								stroke-dasharray="0 0"
								transform="rotate(13.454545454545455, 400, 400)"
								opacity="0.40"
							></path>
							<path
								d="M400.91 221.8C411.54 223.1 421.91 226.38 431.92 231.38 441.92 237.12 451.56 244.25 460.73 252.45 469.88 260.93 478.57 270.17 486.67 279.9 494.77 289.54 502.28 299.5 509.11 309.63 515.93 319.48 522.07 329.49 527.44 339.6 532.81 349.43 537.42 359.45 541.17 369.65 544.95 379.68 547.88 390.01 549.88 400.62 551.92 411.18 553.03 422.11 553.11 433.37 553.23 444.62 552.31 455.66 550.44 466.34 548.58 476.96 545.75 487.09 542.05 496.5 538.34 505.67 533.74 513.91 528.34 520.95 522.92 527.52 516.71 532.67 509.81 536.17 502.89 539.07 495.28 540.26 487.1 539.7 478.9 538.73 470.13 536.26 460.9 532.52 451.66 529.02 441.96 524.84 431.92 520.36 421.87 517.06 411.48 514.15 400.85 511.9 390.22 511.54 379.85 512.02 369.84 513.19 359.84 515.84 350.19 518.62 341 521.18 331.81 524.37 323.07 526.7 314.89 527.91 306.69 529.01 299.03 528.6 292.02 526.64 284.99 524.23 278.59 520.22 272.94 514.74 267.27 508.83 262.33 501.61 258.25 493.28 254.17 484.71 250.94 475.24 248.69 465.07 246.46 454.83 245.23 444.02 245.11 432.78 245.03 421.53 246.07 410.4 248.14 399.48 250.24 388.52 253.36 377.7 257.38 367.05 261.42 356.27 266.34 345.57 272.04 335.01 277.74 324.27 284.2 313.61 291.31 303.16 298.42 292.57 306.17 282.26 314.46 272.43 322.74 262.71 331.57 253.68 340.83 245.64 350.09 238.1 359.8 231.85 369.84 227.21 379.89 223.47 390.28 221.6 400.91 221.8"
								stroke-dasharray="0 0"
								transform="rotate(15.136363636363637, 400, 400)"
								opacity="0.44"
							></path>
							<path
								d="M400.8 232.16C410.67 233.36 420.29 236.37 429.58 240.94 438.86 246.2 447.8 252.76 456.29 260.33 464.79 268.21 472.84 276.86 480.35 286.01 487.86 295.16 494.83 304.67 501.17 314.38 507.5 323.91 513.21 333.62 518.2 343.41 523.19 353.01 527.48 362.76 530.98 372.62 534.5 382.35 537.23 392.28 539.1 402.38 541 412.44 542.03 422.73 542.11 433.18 542.22 443.62 541.36 453.72 539.62 463.34 537.89 472.9 535.26 481.87 531.82 490.06 528.38 498.04 524.11 505.07 519.11 510.94 514.1 516.43 508.35 520.59 501.96 523.3 495.55 525.54 488.51 526.31 480.93 525.58 473.33 524.61 465.21 522.39 456.65 519.11 448.09 516.13 439.1 512.59 429.78 508.78 420.46 506.02 410.82 503.54 400.95 501.54 391.07 501.15 381.44 501.39 372.14 502.16 362.84 504.23 353.87 506.38 345.33 508.35 336.78 510.94 328.64 512.84 321.02 513.82 313.39 514.81 306.26 514.56 299.73 512.97 293.18 511.1 287.22 507.82 281.96 503.21 276.68 498.28 272.09 492.11 268.3 484.87 264.5 477.44 261.51 469.07 259.43 459.94 257.36 450.74 256.22 440.88 256.11 430.48 256.03 420.08 257 409.65 258.91 399.3 260.85 388.93 263.74 378.59 267.45 368.35 271.2 358.03 275.76 347.75 281.04 337.58 286.33 327.3 292.33 317.12 298.93 307.17 305.54 297.17 312.74 287.48 320.45 278.3 328.15 269.28 336.36 260.97 344.97 253.61 353.58 246.75 362.6 241.1 371.94 236.94 381.27 233.58 390.92 231.93 400.8 232.16"
								stroke-dasharray="0 0"
								transform="rotate(16.818181818181817, 400, 400)"
								opacity="0.48"
							></path>
							<path
								d="M400.64 242.52C409.75 243.62 418.63 246.35 427.2 250.5 435.76 255.27 444 261.24 451.84 268.17 459.67 275.41 467.1 283.41 474.02 291.92 480.95 300.49 487.38 309.45 493.23 318.64 499.08 327.73 504.35 337.01 508.96 346.37 513.58 355.61 517.55 364.97 520.79 374.38 524.05 383.71 526.59 393.17 528.32 402.68 530.08 412.17 531.04 421.77 531.11 431.39 531.21 441 530.41 450.16 528.8 458.76 527.2 467.3 524.78 475.18 521.6 482.25 518.42 489.15 514.49 495.11 509.88 499.98 505.27 504.55 499.97 507.93 494.09 510.01 488.19 511.77 481.71 512.26 474.72 511.5 467.73 510.61 460.25 508.7 452.37 505.9 444.48 503.44 436.19 500.5 427.6 497.31 419 495.04 410.1 492.94 400.99 491.18 391.88 490.77 382.98 490.81 374.39 491.24 365.8 492.78 357.51 494.36 349.6 495.78 341.7 497.79 334.17 499.24 327.12 499.93 320.05 500.74 313.45 500.51 307.41 499.16 301.35 497.64 295.84 494.92 290.97 491.01 286.09 486.88 281.85 481.62 278.35 475.34 274.84 468.9 272.08 461.54 270.16 453.39 268.26 445.18 267.21 436.25 267.11 426.71 267.04 417.17 267.92 407.49 269.68 397.79 271.47 388.08 274.12 378.33 277.54 368.61 280.98 358.86 285.18 349.1 290.05 339.46 294.92 329.76 300.45 320.18 306.55 310.84 312.64 301.53 319.3 292.54 326.42 284.08 333.53 275.83 341.12 268.26 349.08 261.61 357.03 255.43 365.37 250.37 373.99 246.68 382.61 243.71 391.53 242.27 400.64 242.52"
								stroke-dasharray="0 0"
								transform="rotate(18.5, 400, 400)"
								opacity="0.53"
							></path>
							<path
								d="M400.45 252.88C408.8 253.89 416.94 256.34 424.79 260.07 432.63 264.34 440.18 269.72 447.36 275.99 454.54 282.57 461.34 289.86 467.68 297.68 474.03 305.59 479.93 313.91 485.29 322.48 490.65 331.01 495.49 339.75 499.73 348.57 503.98 357.32 507.63 366.17 510.61 375.04 513.61 383.87 515.94 392.75 517.54 401.61 519.16 410.46 520.04 419.32 520.11 428.09 520.2 436.85 519.47 445.09 517.99 452.71 516.52 460.28 514.29 467.16 511.38 473.23 506.66 481.69 493.99 493.43 486.19 496.43 480.8 497.86 474.87 498.21 468.49 497.5 462.09 496.78 455.25 495.2 448.03 492.89 440.82 490.92 433.23 488.55 425.36 485.93 417.49 484.1 409.34 482.36 400.99 480.82 392.63 480.4 384.47 480.28 376.59 480.41 368.71 481.48 361.1 482.55 353.84 483.47 346.58 484.93 339.66 485.93 333.18 486.31 323.66 486.72 306.97 482.88 299.97 478.36 295.49 474.86 291.61 470.35 288.39 464.89 285.18 459.32 282.66 452.87 280.9 445.63 279.16 438.34 278.2 430.33 278.11 421.66 278.04 412.99 278.85 404.1 280.45 395.12 282.08 386.14 284.5 377.06 287.63 367.98 290.77 358.89 294.61 349.78 299.06 340.78 303.52 331.78 308.59 322.89 314.17 314.27 319.75 305.73 325.85 297.52 332.38 289.84 338.91 282.38 345.86 275.58 353.16 269.65 360.46 264.15 368.11 259.69 376.02 256.45 383.92 253.85 392.09 252.61 400.45 252.88"
								stroke-dasharray="0 0"
								transform="rotate(20.18181818181818, 400, 400)"
								opacity="0.57"
							></path>
							<path
								d="M400.23 263.25C407.83 264.15 415.23 266.33 422.36 269.64 429.49 273.43 436.35 278.21 442.87 283.81 449.39 289.7 455.58 296.26 461.35 303.33 467.12 310.53 472.48 318.13 477.36 325.98 482.24 333.86 486.65 341.94 490.51 350.11 494.38 358.26 497.71 366.5 500.43 374.73 503.17 382.94 505.3 391.16 506.76 399.31 508.24 407.45 509.05 415.53 509.11 423.44 509.19 431.35 508.52 438.68 507.17 445.39 504.82 455.03 496.87 470.45 491.4 475.93 485.36 480.29 470.7 484.11 462.22 483.69 456.42 483.17 450.21 481.94 443.66 480.11 437.11 478.61 430.23 476.75 423.08 474.65 415.93 473.22 408.52 471.79 400.93 470.46 393.33 470.03 385.91 469.78 378.74 469.68 371.56 470.35 364.64 470.97 358.03 471.44 351.41 472.4 345.12 472.97 339.21 473.03 330.54 473.08 315.34 469.44 308.97 465.48 303.13 460.51 294.38 446.16 291.64 436.94 290.06 430.51 289.19 423.36 289.11 415.56 289.05 407.76 289.78 399.69 291.23 391.49 292.7 383.31 294.89 374.98 297.72 366.64 300.57 358.3 304.05 349.95 308.08 341.7 312.13 333.48 316.73 325.39 321.79 317.57 326.87 309.85 332.41 302.48 338.34 295.62 344.27 288.98 350.6 282.97 357.24 277.76 363.87 272.93 370.83 269.04 378.02 266.25 385.21 264 392.64 262.96 400.23 263.25"
								stroke-dasharray="0 0"
								transform="rotate(21.863636363636363, 400, 400)"
								opacity="0.61"
							></path>
							<path
								d="M400.01 273.61C406.84 274.41 413.5 276.33 419.92 279.23 426.33 282.54 432.51 286.73 438.38 291.65 444.25 296.84 449.81 302.65 455.01 308.94 460.21 315.37 465.04 322.19 469.44 329.26 473.84 336.39 477.82 343.73 481.3 351.15 484.8 358.59 487.81 366.11 490.27 373.61 492.74 381.11 494.67 388.59 495.99 395.96 497.32 403.34 498.05 410.61 498.11 417.65 498.18 424.7 497.58 431.17 496.36 437.02 494.23 445.42 487.07 458.63 482.15 463.26 476.72 466.97 463.55 470.32 455.92 470.11 450.72 469.82 445.14 468.95 439.25 467.57 433.36 466.49 427.17 465.1 420.75 463.46 414.32 462.38 407.65 461.24 400.82 460.1 393.99 459.68 387.3 459.33 380.84 459.03 374.38 459.36 368.14 459.61 362.18 459.69 353.38 460.29 337.4 459.81 330.35 458.28 323.71 456.16 312.71 448.23 308.49 442.37 304.84 435.7 300.57 418.81 300.11 408.71 300.05 401.77 300.71 394.56 302.01 387.19 303.33 379.84 305.29 372.34 307.83 364.81 310.38 357.31 313.5 349.79 317.12 342.38 320.75 335.02 324.88 327.79 329.43 320.84 333.99 314 338.97 307.5 344.31 301.48 349.65 295.68 355.34 290.45 361.31 285.95 367.28 281.79 373.54 278.45 380.01 276.09 386.48 274.18 393.17 273.31 400.01 273.61"
								stroke-dasharray="0 0"
								transform="rotate(23.545454545454547, 400, 400)"
								opacity="0.65"
							></path>
							<path
								d="M399.78 283.97C411.93 285.78 423.46 291.29 433.9 299.54 444.34 308.72 453.7 320.02 461.54 332.42 469.39 345.09 475.73 358.53 480.11 371.9 484.53 385.32 487.02 398.63 487.11 411.02 487.25 423.4 484.97 433.56 480.71 441.2 476.47 448.67 470.22 453.49 462.42 455.56 454.62 457.65 445.26 457.44 434.81 455.29 424.36 454.19 412.82 452.21 400.67 449.74 388.52 449.51 376.9 449.07 366.3 448.24 355.69 448.81 346.09 447.97 337.97 445.32 329.84 442.96 323.2 438.16 318.54 430.88 313.89 423.51 311.25 413.62 311.11 401.44 311.02 389.26 313.46 376.07 317.94 362.75 322.46 349.56 329.01 336.39 337.08 324.19 345.17 312.46 354.77 302.14 365.38 294.25 376 287.51 387.63 283.8 399.78 283.97"
								stroke-dasharray="0 0"
								transform="rotate(25.227272727272727, 400, 400)"
								opacity="0.70"
							></path>
							<path
								d="M399.56 294.33C410.19 295.86 420.28 300.51 429.42 307.49 438.57 315.26 446.78 324.9 453.65 335.56 460.53 346.52 466.1 358.2 469.95 369.84 473.84 381.56 476.03 393.14 476.11 403.85 476.23 414.55 474.23 423.25 470.49 429.76 466.77 436.18 461.31 440.39 454.48 442.34 447.66 444.43 439.48 444.65 430.34 443.26 421.2 442.75 411.12 441.39 400.49 439.38 389.85 439.06 379.68 438.31 370.4 437.08 361.11 436.97 352.7 435.65 345.59 432.88 338.48 430.44 332.67 426.04 328.6 419.62 324.54 413.18 322.23 404.62 322.11 394.1 322.03 383.58 324.15 372.19 328.06 360.71 332 349.36 337.71 338.1 344.75 327.75 351.82 317.83 360.2 309.19 369.48 302.68 378.76 297.09 388.93 294.08 399.56 294.33"
								stroke-dasharray="0 0"
								transform="rotate(26.90909090909091, 400, 400)"
								opacity="0.74"
							></path>
							<path
								d="M399.37 304.69C408.48 305.95 417.13 309.78 424.98 315.53 432.83 321.92 439.88 329.91 445.78 338.81 451.7 347.99 456.49 357.83 459.81 367.68 463.15 377.61 465.04 387.43 465.11 396.49 465.21 405.55 463.49 412.91 460.28 418.44 457.09 423.94 452.39 427.65 446.54 429.56 440.7 431.65 433.69 432.25 425.86 431.52 418.03 431.48 409.39 430.61 400.27 429.02 391.16 428.64 382.44 427.7 374.48 426.22 366.51 425.57 359.3 423.91 353.2 421.09 347.11 418.58 342.14 414.52 338.65 408.88 335.18 403.27 333.21 395.95 333.11 387.05 333.04 378.14 334.85 368.56 338.18 358.95 341.54 349.46 346.42 340.12 352.44 331.62 358.48 323.48 365.65 316.46 373.6 311.26 381.54 306.76 390.25 304.39 399.37 304.69"
								stroke-dasharray="0 0"
								transform="rotate(28.59090909090909, 400, 400)"
								opacity="0.78"
							></path>
							<path
								d="M399.21 315.05C406.8 316.06 414.02 319.1 420.56 323.69 427.11 328.74 433 335.13 437.94 342.29 442.89 349.68 446.89 357.67 449.67 365.7 452.47 373.81 454.05 381.85 454.11 389.31 453.47 399.81 445.44 413.8 438.61 417.31 433.73 419.36 427.89 420.25 421.37 420.04 414.84 420.34 407.64 419.88 400.05 418.65 392.45 418.26 385.19 417.23 378.55 415.64 368.91 413.71 353.68 405.64 348.71 398.92 345.83 394.09 344.19 387.95 344.11 380.62 344.05 373.28 345.55 365.48 348.32 357.73 351.1 350.08 355.15 342.63 360.16 335.91 365.17 329.48 371.14 324 377.75 320 384.36 316.52 391.61 314.73 399.21 315.05"
								stroke-dasharray="0 0"
								transform="rotate(30.272727272727273, 400, 400)"
								opacity="0.83"
							></path>
							<path
								d="M399.09 325.41C411.24 327.39 422.2 335.32 430.12 346.1 438.07 357.56 443.02 370.85 443.11 382.63 443.25 394.41 438.5 402.24 430.68 405.7 422.87 409.71 411.97 410.61 399.82 408.29 387.67 408.08 376.57 405.06 368.45 399.71 360.35 395.09 355.25 386.74 355.11 375.12 355.02 363.5 359.92 350.98 367.89 340.73 375.9 331.27 386.93 325.23 399.09 325.41"
								stroke-dasharray="0 0"
								transform="rotate(31.954545454545453, 400, 400)"
								opacity="0.87"
							></path>
							<path
								d="M399.02 335.77C408.13 337.12 416.36 342.7 422.33 350.37 428.31 358.47 432.04 368.06 432.11 376.8 432.21 385.54 428.63 391.68 422.76 394.8 416.89 398.28 408.71 399.45 399.6 397.93 390.49 397.58 382.17 394.79 376.09 390.23 370.02 386.12 366.21 379.47 366.11 370.82 366.04 362.17 369.69 353.25 375.66 346.17 381.64 339.55 389.9 335.45 399.02 335.77"
								stroke-dasharray="0 0"
								transform="rotate(33.63636363636363, 400, 400)"
								opacity="0.91"
							></path>
							<path
								d="M399 346.13C411.15 348.19 421.02 360.52 421.11 372.08 421.25 383.64 411.55 389.8 399.4 387.57 387.24 387.37 377.25 379.4 377.11 367.93 377.02 356.46 386.84 345.94 399 346.13"
								stroke-dasharray="0 0"
								transform="rotate(35.31818181818182, 400, 400)"
								opacity="0.96"
							></path>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
};